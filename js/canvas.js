/**
 * Campaign Canvas Controller
 * Handles the infinite canvas with pan, zoom, and state management
 */

const CampaignCanvas = {
    // Canvas state
    canvas: null,
    viewport: null,
    svgLayer: null,

    // Transform state
    scale: 1,
    offsetX: 0,
    offsetY: 0,

    // Interaction state
    isPanning: false,
    panStartX: 0,
    panStartY: 0,

    // Zoom limits
    minScale: 0.25,
    maxScale: 2,

    // Current board data
    currentBoard: null,
    boards: [],

    // Selection state
    selectedCard: null,
    selectedConnection: null,
    selectedNote: null,

    /**
     * Initialize the canvas
     */
    init() {
        this.canvas = document.getElementById('campaign-canvas');
        this.viewport = document.getElementById('canvas-viewport');
        this.svgLayer = document.getElementById('canvas-svg-layer');

        if (!this.canvas || !this.viewport) {
            console.warn('Campaign canvas elements not found');
            return;
        }

        this.bindEvents();
        this.loadBoards();
        this.updateTransform();
    },

    /**
     * Bind all canvas events
     */
    bindEvents() {
        // Pan events
        this.canvas.addEventListener('mousedown', (e) => this.onMouseDown(e));
        this.canvas.addEventListener('mousemove', (e) => this.onMouseMove(e));
        this.canvas.addEventListener('mouseup', (e) => this.onMouseUp(e));
        this.canvas.addEventListener('mouseleave', (e) => this.onMouseUp(e));

        // Zoom events
        this.canvas.addEventListener('wheel', (e) => this.onWheel(e), { passive: false });

        // Touch events for mobile
        this.canvas.addEventListener('touchstart', (e) => this.onTouchStart(e), { passive: false });
        this.canvas.addEventListener('touchmove', (e) => this.onTouchMove(e), { passive: false });
        this.canvas.addEventListener('touchend', (e) => this.onTouchEnd(e));

        // Click to deselect
        this.canvas.addEventListener('click', (e) => this.onCanvasClick(e));

        // Context menu
        this.canvas.addEventListener('contextmenu', (e) => this.onContextMenu(e));

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => this.onKeyDown(e));
    },

    /**
     * Mouse down - start panning
     */
    onMouseDown(e) {
        // Only pan with left click on canvas background or middle mouse
        if (e.target === this.canvas || e.target === this.viewport || e.button === 1) {
            if (e.button === 0 || e.button === 1) {
                this.isPanning = true;
                this.panStartX = e.clientX - this.offsetX;
                this.panStartY = e.clientY - this.offsetY;
                this.canvas.style.cursor = 'grabbing';
                e.preventDefault();
            }
        }
    },

    /**
     * Mouse move - pan if dragging
     */
    onMouseMove(e) {
        if (this.isPanning) {
            this.offsetX = e.clientX - this.panStartX;
            this.offsetY = e.clientY - this.panStartY;
            this.updateTransform();
        }

        // Update connection drawing if active
        if (CanvasConnections && CanvasConnections.isDrawing) {
            CanvasConnections.updateDrawing(e);
        }
    },

    /**
     * Mouse up - stop panning
     */
    onMouseUp(e) {
        if (this.isPanning) {
            this.isPanning = false;
            this.canvas.style.cursor = 'grab';
            this.saveState();
        }
    },

    /**
     * Mouse wheel - zoom
     */
    onWheel(e) {
        e.preventDefault();

        const rect = this.canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        // Calculate zoom
        const delta = e.deltaY > 0 ? 0.9 : 1.1;
        const newScale = Math.max(this.minScale, Math.min(this.maxScale, this.scale * delta));

        if (newScale !== this.scale) {
            // Zoom toward mouse position
            const scaleChange = newScale / this.scale;
            this.offsetX = mouseX - (mouseX - this.offsetX) * scaleChange;
            this.offsetY = mouseY - (mouseY - this.offsetY) * scaleChange;
            this.scale = newScale;

            this.updateTransform();
            this.saveState();
        }
    },

    /**
     * Touch start
     */
    onTouchStart(e) {
        if (e.touches.length === 1) {
            const touch = e.touches[0];
            if (e.target === this.canvas || e.target === this.viewport) {
                this.isPanning = true;
                this.panStartX = touch.clientX - this.offsetX;
                this.panStartY = touch.clientY - this.offsetY;
            }
        }
    },

    /**
     * Touch move
     */
    onTouchMove(e) {
        if (this.isPanning && e.touches.length === 1) {
            e.preventDefault();
            const touch = e.touches[0];
            this.offsetX = touch.clientX - this.panStartX;
            this.offsetY = touch.clientY - this.panStartY;
            this.updateTransform();
        }
    },

    /**
     * Touch end
     */
    onTouchEnd(e) {
        this.isPanning = false;
        this.saveState();
    },

    /**
     * Canvas click - deselect or add note
     */
    onCanvasClick(e) {
        if (e.target === this.canvas || e.target === this.viewport) {
            this.deselectAll();
        }
    },

    /**
     * Context menu - add sticky note
     */
    onContextMenu(e) {
        if (e.target === this.canvas || e.target === this.viewport) {
            e.preventDefault();
            const pos = this.screenToCanvas(e.clientX, e.clientY);
            this.showContextMenu(e.clientX, e.clientY, pos);
        }
    },

    /**
     * Keyboard shortcuts
     */
    onKeyDown(e) {
        // Only handle if canvas panel is active
        const panel = document.getElementById('panel-campaign');
        if (!panel || !panel.classList.contains('active')) return;

        // Don't handle shortcuts when user is typing in an input or contenteditable
        const activeEl = document.activeElement;
        const isEditing = activeEl && (
            activeEl.tagName === 'INPUT' ||
            activeEl.tagName === 'TEXTAREA' ||
            activeEl.isContentEditable ||
            activeEl.closest('[contenteditable="true"]')
        );

        // Delete selected item (only if not editing text)
        if ((e.key === 'Delete' || e.key === 'Backspace') && !isEditing) {
            if (this.selectedCard) {
                CanvasCards.removeCard(this.selectedCard);
                this.selectedCard = null;
            } else if (this.selectedConnection) {
                CanvasConnections.removeConnection(this.selectedConnection);
                this.selectedConnection = null;
            } else if (this.selectedNote) {
                this.removeNote(this.selectedNote);
                this.selectedNote = null;
            }
        }

        // Escape to deselect
        if (e.key === 'Escape') {
            this.deselectAll();
            CanvasConnections.cancelDrawing();
        }

        // Reset view
        if (e.key === 'Home' && !isEditing) {
            this.resetView();
        }
    },

    /**
     * Update the viewport transform
     */
    updateTransform() {
        if (this.viewport) {
            this.viewport.style.transform = `translate(${this.offsetX}px, ${this.offsetY}px) scale(${this.scale})`;
        }
        if (this.svgLayer) {
            this.svgLayer.style.transform = `translate(${this.offsetX}px, ${this.offsetY}px) scale(${this.scale})`;
        }

        // Update zoom indicator
        const zoomIndicator = document.getElementById('canvas-zoom-level');
        if (zoomIndicator) {
            zoomIndicator.textContent = `${Math.round(this.scale * 100)}%`;
        }
    },

    /**
     * Convert screen coordinates to canvas coordinates
     */
    screenToCanvas(screenX, screenY) {
        const rect = this.canvas.getBoundingClientRect();
        return {
            x: (screenX - rect.left - this.offsetX) / this.scale,
            y: (screenY - rect.top - this.offsetY) / this.scale
        };
    },

    /**
     * Convert canvas coordinates to screen coordinates
     */
    canvasToScreen(canvasX, canvasY) {
        const rect = this.canvas.getBoundingClientRect();
        return {
            x: canvasX * this.scale + this.offsetX + rect.left,
            y: canvasY * this.scale + this.offsetY + rect.top
        };
    },

    /**
     * Reset view to center
     */
    resetView() {
        this.scale = 1;
        this.offsetX = 0;
        this.offsetY = 0;
        this.updateTransform();
        this.saveState();
    },

    /**
     * Zoom to fit all content
     */
    zoomToFit() {
        if (!this.currentBoard || !this.currentBoard.cards || this.currentBoard.cards.length === 0) {
            this.resetView();
            return;
        }

        // Find bounds of all cards
        let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;

        this.currentBoard.cards.forEach(card => {
            minX = Math.min(minX, card.x);
            minY = Math.min(minY, card.y);
            maxX = Math.max(maxX, card.x + 200); // Approximate card width
            maxY = Math.max(maxY, card.y + 150); // Approximate card height
        });

        const rect = this.canvas.getBoundingClientRect();
        const padding = 50;

        const scaleX = (rect.width - padding * 2) / (maxX - minX);
        const scaleY = (rect.height - padding * 2) / (maxY - minY);
        this.scale = Math.min(scaleX, scaleY, 1);
        this.scale = Math.max(this.minScale, Math.min(this.maxScale, this.scale));

        const centerX = (minX + maxX) / 2;
        const centerY = (minY + maxY) / 2;

        this.offsetX = rect.width / 2 - centerX * this.scale;
        this.offsetY = rect.height / 2 - centerY * this.scale;

        this.updateTransform();
        this.saveState();
    },

    /**
     * Deselect all items
     */
    deselectAll() {
        if (this.selectedCard) {
            const el = document.querySelector(`[data-canvas-id="${this.selectedCard}"]`);
            if (el) el.classList.remove('selected');
            this.selectedCard = null;
        }
        if (this.selectedConnection) {
            CanvasConnections.deselectConnection(this.selectedConnection);
            this.selectedConnection = null;
        }
        if (this.selectedNote) {
            const el = document.querySelector(`[data-note-id="${this.selectedNote}"]`);
            if (el) el.classList.remove('selected');
            this.selectedNote = null;
        }
    },

    /**
     * Show context menu
     */
    showContextMenu(screenX, screenY, canvasPos) {
        // Remove existing menu
        const existing = document.querySelector('.canvas-context-menu');
        if (existing) existing.remove();

        const menu = document.createElement('div');
        menu.className = 'canvas-context-menu';
        menu.innerHTML = `
            <div class="context-menu-item" data-action="add-note">Add Sticky Note</div>
            <div class="context-menu-divider"></div>
            <div class="context-menu-item" data-action="reset-view">Reset View</div>
            <div class="context-menu-item" data-action="zoom-fit">Zoom to Fit</div>
        `;
        menu.style.left = screenX + 'px';
        menu.style.top = screenY + 'px';

        menu.addEventListener('click', (e) => {
            const action = e.target.dataset.action;
            if (action === 'add-note') {
                this.addNote(canvasPos.x, canvasPos.y);
            } else if (action === 'reset-view') {
                this.resetView();
            } else if (action === 'zoom-fit') {
                this.zoomToFit();
            }
            menu.remove();
        });

        document.body.appendChild(menu);

        // Remove on click outside
        setTimeout(() => {
            document.addEventListener('click', function handler(e) {
                if (!menu.contains(e.target)) {
                    menu.remove();
                    document.removeEventListener('click', handler);
                }
            });
        }, 0);
    },

    // Note color options
    noteColors: [
        { id: 'dark', label: 'Dark', bg: '#2d2d2d', text: '#e0e0e0' },
        { id: 'yellow', label: 'Yellow', bg: '#fef3b5', text: '#5a4a00' },
        { id: 'blue', label: 'Blue', bg: '#d4e8fc', text: '#1a4a6e' },
        { id: 'green', label: 'Green', bg: '#d4f5d4', text: '#1a5a1a' },
        { id: 'pink', label: 'Pink', bg: '#fce4ec', text: '#6e1a3a' },
        { id: 'orange', label: 'Orange', bg: '#ffe0b2', text: '#6e3a00' }
    ],

    /**
     * Add a sticky note
     */
    addNote(x, y, text = '', title = '') {
        if (!this.currentBoard) this.createBoard('Default');

        const note = {
            id: 'note_' + Date.now(),
            x: x,
            y: y,
            title: title || '',
            text: text || 'New note...',
            color: 'dark',
            collapsed: false
        };

        if (!this.currentBoard.notes) this.currentBoard.notes = [];
        this.currentBoard.notes.push(note);

        this.renderNote(note);
        this.saveState();
        this.updateEmptyState();

        return note;
    },

    /**
     * Render a sticky note
     */
    renderNote(note) {
        const el = document.createElement('div');
        el.className = `canvas-note canvas-note-${note.color}${note.collapsed ? ' collapsed' : ''}`;
        el.dataset.noteId = note.id;
        el.style.left = note.x + 'px';
        el.style.top = note.y + 'px';

        el.innerHTML = `
            <div class="note-header">
                <input type="text" class="note-title" placeholder="Title..." value="${this.escapeHtml(note.title || '')}" />
                <div class="note-header-actions">
                    <button class="note-btn note-collapse" title="Collapse/Expand">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </button>
                    <button class="note-btn note-color-btn" title="Change color">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"></circle>
                        </svg>
                    </button>
                    <button class="note-btn note-delete" title="Delete">&times;</button>
                </div>
            </div>
            <div class="note-body">
                <div class="note-content" contenteditable="true">${this.escapeHtml(note.text)}</div>
            </div>
        `;

        // Make draggable
        this.makeNoteDraggable(el, note);

        // Title editing
        const titleInput = el.querySelector('.note-title');
        titleInput.addEventListener('input', () => {
            note.title = titleInput.value;
            this.saveState();
        });
        titleInput.addEventListener('click', (e) => e.stopPropagation());

        // Content editing
        const content = el.querySelector('.note-content');
        content.addEventListener('blur', () => {
            note.text = content.textContent;
            this.saveState();
        });
        content.addEventListener('click', (e) => e.stopPropagation());

        // Collapse toggle
        el.querySelector('.note-collapse').addEventListener('click', (e) => {
            e.stopPropagation();
            note.collapsed = !note.collapsed;
            el.classList.toggle('collapsed', note.collapsed);
            this.saveState();
        });

        // Color menu
        el.querySelector('.note-color-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            this.showNoteColorMenu(note, el, e);
        });

        // Delete
        el.querySelector('.note-delete').addEventListener('click', (e) => {
            e.stopPropagation();
            this.removeNote(note.id);
        });

        // Select on click
        el.addEventListener('click', (e) => {
            e.stopPropagation();
            this.deselectAll();
            this.selectedNote = note.id;
            el.classList.add('selected');
        });

        this.viewport.appendChild(el);
    },

    /**
     * Show color picker menu for a note
     */
    showNoteColorMenu(note, noteEl, event) {
        // Remove existing menu
        const existing = document.querySelector('.note-color-menu');
        if (existing) existing.remove();

        const menu = document.createElement('div');
        menu.className = 'note-color-menu';

        const rect = event.target.getBoundingClientRect();
        menu.style.left = rect.left + 'px';
        menu.style.top = (rect.bottom + 4) + 'px';

        menu.innerHTML = this.noteColors.map(c => `
            <button class="note-color-option ${note.color === c.id ? 'active' : ''}"
                    data-color="${c.id}"
                    style="background: ${c.bg}; color: ${c.text};"
                    title="${c.label}">
                ${c.label}
            </button>
        `).join('');

        menu.addEventListener('click', (e) => {
            const colorId = e.target.dataset.color;
            if (colorId) {
                this.setNoteColor(note, noteEl, colorId);
                menu.remove();
            }
        });

        document.body.appendChild(menu);

        // Remove on click outside
        setTimeout(() => {
            const handler = (e) => {
                if (!menu.contains(e.target)) {
                    menu.remove();
                    document.removeEventListener('click', handler);
                }
            };
            document.addEventListener('click', handler);
        }, 0);
    },

    /**
     * Set note color
     */
    setNoteColor(note, el, colorId) {
        el.classList.remove(`canvas-note-${note.color}`);
        note.color = colorId;
        el.classList.add(`canvas-note-${note.color}`);
        this.saveState();
    },

    /**
     * Escape HTML for note content
     */
    escapeHtml(str) {
        if (!str) return '';
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    },

    /**
     * Make a note draggable
     */
    makeNoteDraggable(el, note) {
        let isDragging = false;
        let startX, startY;

        el.addEventListener('mousedown', (e) => {
            if (e.target.classList.contains('note-content')) return;
            isDragging = true;
            startX = e.clientX / this.scale - note.x;
            startY = e.clientY / this.scale - note.y;
            el.classList.add('dragging');
            e.stopPropagation();
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            note.x = e.clientX / this.scale - startX;
            note.y = e.clientY / this.scale - startY;
            el.style.left = note.x + 'px';
            el.style.top = note.y + 'px';
        });

        document.addEventListener('mouseup', () => {
            if (isDragging) {
                isDragging = false;
                el.classList.remove('dragging');
                this.saveState();
            }
        });
    },

    /**
     * Remove a note
     */
    removeNote(noteId) {
        if (!this.currentBoard || !this.currentBoard.notes) return;

        this.currentBoard.notes = this.currentBoard.notes.filter(n => n.id !== noteId);

        const el = document.querySelector(`[data-note-id="${noteId}"]`);
        if (el) el.remove();

        this.saveState();
        this.updateEmptyState();
    },

    /**
     * Load boards from localStorage
     */
    loadBoards() {
        try {
            this.boards = JSON.parse(localStorage.getItem('dmtk_campaign_boards')) || [];

            // Load last active board
            const lastBoardId = localStorage.getItem('dmtk_campaign_active');
            if (lastBoardId) {
                const board = this.boards.find(b => b.id === lastBoardId);
                if (board) {
                    this.loadBoard(board.id);
                    return;
                }
            }

            // Create default board if none exist
            if (this.boards.length === 0) {
                this.createBoard('My Campaign');
            } else {
                this.loadBoard(this.boards[0].id);
            }
        } catch (e) {
            console.error('Failed to load boards:', e);
            this.boards = [];
            this.createBoard('My Campaign');
        }

        this.updateBoardsList();
    },

    /**
     * Create a new board
     */
    createBoard(name) {
        const board = {
            id: 'board_' + Date.now(),
            name: name,
            createdAt: new Date().toISOString(),
            cards: [],
            connections: [],
            notes: [],
            view: { scale: 1, offsetX: 0, offsetY: 0 }
        };

        this.boards.push(board);
        this.loadBoard(board.id);
        this.saveBoards();
        this.updateBoardsList();

        return board;
    },

    /**
     * Load a board
     */
    loadBoard(boardId) {
        const board = this.boards.find(b => b.id === boardId);
        if (!board) return;

        this.currentBoard = board;

        // Restore view
        if (board.view) {
            this.scale = board.view.scale || 1;
            this.offsetX = board.view.offsetX || 0;
            this.offsetY = board.view.offsetY || 0;
        } else {
            this.resetView();
        }

        this.updateTransform();
        this.renderBoard();

        localStorage.setItem('dmtk_campaign_active', boardId);

        // Update board name display
        const nameEl = document.getElementById('canvas-board-name');
        if (nameEl) nameEl.textContent = board.name;
    },

    /**
     * Render the current board
     */
    renderBoard() {
        // Clear viewport
        this.viewport.innerHTML = '';

        // Re-create SVG layer
        this.svgLayer.innerHTML = '';

        if (!this.currentBoard) return;

        // Render cards
        if (this.currentBoard.cards) {
            this.currentBoard.cards.forEach(card => {
                CanvasCards.renderCard(card);
            });
        }

        // Render connections
        if (this.currentBoard.connections) {
            this.currentBoard.connections.forEach(conn => {
                CanvasConnections.renderConnection(conn);
            });
        }

        // Render notes
        if (this.currentBoard.notes) {
            this.currentBoard.notes.forEach(note => {
                this.renderNote(note);
            });
        }

        // Update empty state visibility
        this.updateEmptyState();
    },

    /**
     * Update the visibility of the empty state message
     */
    updateEmptyState() {
        const emptyState = document.getElementById('canvas-empty-state');
        if (!emptyState) return;

        const hasContent = this.currentBoard &&
            ((this.currentBoard.cards && this.currentBoard.cards.length > 0) ||
             (this.currentBoard.notes && this.currentBoard.notes.length > 0));

        if (hasContent) {
            emptyState.classList.add('hidden');
        } else {
            emptyState.classList.remove('hidden');
        }
    },

    /**
     * Delete current board
     */
    deleteBoard() {
        if (!this.currentBoard) return;
        if (this.boards.length <= 1) {
            alert('Cannot delete the last board');
            return;
        }

        if (!confirm(`Delete board "${this.currentBoard.name}"?`)) return;

        this.boards = this.boards.filter(b => b.id !== this.currentBoard.id);
        this.saveBoards();
        this.loadBoard(this.boards[0].id);
        this.updateBoardsList();
    },

    /**
     * Rename current board
     */
    renameBoard() {
        if (!this.currentBoard) return;

        const newName = prompt('Board name:', this.currentBoard.name);
        if (newName && newName.trim()) {
            this.currentBoard.name = newName.trim();
            this.saveBoards();

            const nameEl = document.getElementById('canvas-board-name');
            if (nameEl) nameEl.textContent = this.currentBoard.name;

            this.updateBoardsList();
        }
    },

    /**
     * Clear current board
     */
    clearBoard() {
        if (!this.currentBoard) return;
        if (!confirm('Clear all items from this board?')) return;

        this.currentBoard.cards = [];
        this.currentBoard.connections = [];
        this.currentBoard.notes = [];

        this.renderBoard();
        this.saveState();
    },

    /**
     * Update the boards dropdown list
     */
    updateBoardsList() {
        const select = document.getElementById('canvas-board-select');
        if (!select) return;

        select.innerHTML = this.boards.map(b =>
            `<option value="${b.id}" ${this.currentBoard && b.id === this.currentBoard.id ? 'selected' : ''}>${b.name}</option>`
        ).join('');
    },

    /**
     * Save current state
     */
    saveState() {
        if (!this.currentBoard) return;

        // Save view state
        this.currentBoard.view = {
            scale: this.scale,
            offsetX: this.offsetX,
            offsetY: this.offsetY
        };

        this.saveBoards();
    },

    /**
     * Save all boards to localStorage
     */
    saveBoards() {
        try {
            localStorage.setItem('dmtk_campaign_boards', JSON.stringify(this.boards));
        } catch (e) {
            console.error('Failed to save boards:', e);
        }
    },

    /**
     * Export current board as JSON
     */
    exportBoard() {
        if (!this.currentBoard) return;

        const data = JSON.stringify(this.currentBoard, null, 2);
        const blob = new Blob([data], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = `${this.currentBoard.name.replace(/[^a-z0-9]/gi, '_')}.json`;
        a.click();

        URL.revokeObjectURL(url);
    },

    /**
     * Import a board from JSON
     */
    importBoard(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const board = JSON.parse(e.target.result);
                board.id = 'board_' + Date.now(); // New ID to avoid conflicts
                board.name = board.name + ' (Imported)';

                this.boards.push(board);
                this.saveBoards();
                this.loadBoard(board.id);
                this.updateBoardsList();
            } catch (err) {
                alert('Failed to import board: Invalid JSON');
            }
        };
        reader.readAsText(file);
    }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Delay init to ensure panel exists
    setTimeout(() => CampaignCanvas.init(), 200);
});
