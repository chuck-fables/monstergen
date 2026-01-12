/**
 * Notes Panel Controller
 * Handles UI interactions for the Campaign Notes panel
 */

const NotesPanel = {
    editingNoteId: null,

    // Category colors for visual distinction
    categoryColors: {
        general: '#6B7280',
        session: '#3B82F6',
        plot: '#EF4444',
        npc: '#8B5CF6',
        location: '#10B981',
        quest: '#F59E0B',
        lore: '#EC4899',
        rules: '#6366F1'
    },

    // Category labels
    categoryLabels: {
        general: 'General',
        session: 'Session Notes',
        plot: 'Plot Points',
        npc: 'NPC Info',
        location: 'Location Details',
        quest: 'Quest Log',
        lore: 'Lore & History',
        rules: 'House Rules'
    },

    init() {
        this.loadNotes();
        this.setupPanelToggle();
    },

    /**
     * Setup collapsible panel toggle for mobile
     */
    setupPanelToggle() {
        const toggle = document.getElementById('notes-panel-toggle');
        const content = document.getElementById('notes-panel-content');

        if (toggle && content) {
            toggle.addEventListener('click', () => {
                content.classList.toggle('collapsed');
                toggle.classList.toggle('collapsed');
            });
        }
    },

    /**
     * Get all stored notes
     */
    getStoredNotes() {
        try {
            return JSON.parse(localStorage.getItem('dmtk_notes')) || [];
        } catch (e) {
            return [];
        }
    },

    /**
     * Save notes to localStorage
     */
    saveStoredNotes(notes) {
        try {
            localStorage.setItem('dmtk_notes', JSON.stringify(notes));
        } catch (e) {
            console.error('Failed to save notes:', e);
            this.showNotification('Failed to save notes', 'error');
        }
    },

    /**
     * Save or update a note
     */
    saveNote() {
        const titleInput = document.getElementById('noteTitle');
        const bodyInput = document.getElementById('noteBody');
        const categorySelect = document.getElementById('noteCategory');

        const title = titleInput?.value?.trim();
        const body = bodyInput?.value?.trim();
        const category = categorySelect?.value || 'general';

        if (!title) {
            this.showNotification('Please enter a title', 'error');
            titleInput?.focus();
            return;
        }

        if (!body) {
            this.showNotification('Please enter some content', 'error');
            bodyInput?.focus();
            return;
        }

        const notes = this.getStoredNotes();

        if (this.editingNoteId) {
            // Update existing note
            const noteIndex = notes.findIndex(n => n.id === this.editingNoteId);
            if (noteIndex !== -1) {
                notes[noteIndex].title = title;
                notes[noteIndex].body = body;
                notes[noteIndex].category = category;
                notes[noteIndex].modifiedAt = new Date().toISOString();
                this.showNotification('Note updated', 'success');
            }
            this.editingNoteId = null;
        } else {
            // Create new note
            const note = {
                id: 'note_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
                title: title,
                body: body,
                category: category,
                createdAt: new Date().toISOString(),
                modifiedAt: new Date().toISOString()
            };
            notes.unshift(note);
            this.showNotification('Note saved', 'success');
        }

        this.saveStoredNotes(notes);
        this.clearForm();
        this.loadNotes();
    },

    /**
     * Clear the note form
     */
    clearForm() {
        const titleInput = document.getElementById('noteTitle');
        const bodyInput = document.getElementById('noteBody');
        const categorySelect = document.getElementById('noteCategory');

        if (titleInput) titleInput.value = '';
        if (bodyInput) bodyInput.value = '';
        if (categorySelect) categorySelect.value = 'general';

        this.editingNoteId = null;

        // Update button text
        const saveBtn = document.querySelector('.note-form-actions .btn-primary');
        if (saveBtn) saveBtn.textContent = 'Save Note';
    },

    /**
     * Load and display all notes
     */
    loadNotes() {
        const container = document.getElementById('notesList');
        if (!container) return;

        const notes = this.getStoredNotes();

        // Apply current filter
        const filteredNotes = this.getFilteredNotes(notes);

        if (filteredNotes.length === 0) {
            const hasFilter = document.getElementById('notesSearch')?.value ||
                             document.getElementById('notesFilterCategory')?.value !== 'all';

            container.innerHTML = `
                <div class="notes-empty-state">
                    <div class="icon">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="12" y1="18" x2="12" y2="12"></line>
                            <line x1="9" y1="15" x2="15" y2="15"></line>
                        </svg>
                    </div>
                    <h3>${hasFilter ? 'No Matching Notes' : 'No Notes Yet'}</h3>
                    <p>${hasFilter ? 'Try adjusting your search or filter.' : 'Create your first campaign note to get started!'}</p>
                </div>
            `;
            return;
        }

        container.innerHTML = filteredNotes.map(note => this.renderNoteCard(note)).join('');
    },

    /**
     * Get filtered notes based on search and category
     */
    getFilteredNotes(notes) {
        const searchTerm = document.getElementById('notesSearch')?.value?.toLowerCase() || '';
        const categoryFilter = document.getElementById('notesFilterCategory')?.value || 'all';

        return notes.filter(note => {
            const matchesSearch = !searchTerm ||
                note.title.toLowerCase().includes(searchTerm) ||
                note.body.toLowerCase().includes(searchTerm);

            const matchesCategory = categoryFilter === 'all' || note.category === categoryFilter;

            return matchesSearch && matchesCategory;
        });
    },

    /**
     * Filter notes (called on input/change)
     */
    filterNotes() {
        this.loadNotes();
    },

    /**
     * Render a single note card
     */
    renderNoteCard(note) {
        const categoryColor = this.categoryColors[note.category] || this.categoryColors.general;
        const categoryLabel = this.categoryLabels[note.category] || 'General';
        const date = new Date(note.modifiedAt || note.createdAt);
        const dateStr = date.toLocaleDateString(undefined, {
            month: 'short',
            day: 'numeric',
            year: date.getFullYear() !== new Date().getFullYear() ? 'numeric' : undefined
        });

        // Truncate body for preview
        const preview = note.body.length > 150
            ? note.body.substring(0, 150) + '...'
            : note.body;

        return `
            <div class="note-card" data-note-id="${note.id}">
                <div class="note-card-header" style="border-left-color: ${categoryColor}">
                    <div class="note-card-title">${this.escapeHtml(note.title)}</div>
                    <div class="note-card-meta">
                        <span class="note-card-category" style="background: ${categoryColor}">${categoryLabel}</span>
                        <span class="note-card-date">${dateStr}</span>
                    </div>
                </div>
                <div class="note-card-body">
                    <div class="note-card-preview">${this.escapeHtml(preview)}</div>
                </div>
                <div class="note-card-actions">
                    <button class="note-action-btn" onclick="NotesPanel.editNote('${note.id}')" title="Edit">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                        </svg>
                    </button>
                    <button class="note-action-btn" onclick="NotesPanel.copyNote('${note.id}')" title="Copy to clipboard">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                        </svg>
                    </button>
                    <button class="note-action-btn note-action-canvas" onclick="NotesPanel.sendToCanvas('${note.id}')" title="Send to Campaign">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="12" y1="8" x2="12" y2="16"></line>
                            <line x1="8" y1="12" x2="16" y2="12"></line>
                        </svg>
                    </button>
                    <button class="note-action-btn note-action-delete" onclick="NotesPanel.deleteNote('${note.id}')" title="Delete">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        </svg>
                    </button>
                </div>
            </div>
        `;
    },

    /**
     * Edit a note
     */
    editNote(noteId) {
        const notes = this.getStoredNotes();
        const note = notes.find(n => n.id === noteId);

        if (!note) return;

        const titleInput = document.getElementById('noteTitle');
        const bodyInput = document.getElementById('noteBody');
        const categorySelect = document.getElementById('noteCategory');

        if (titleInput) titleInput.value = note.title;
        if (bodyInput) bodyInput.value = note.body;
        if (categorySelect) categorySelect.value = note.category;

        this.editingNoteId = noteId;

        // Update button text
        const saveBtn = document.querySelector('.note-form-actions .btn-primary');
        if (saveBtn) saveBtn.textContent = 'Update Note';

        // Scroll to form on mobile
        const form = document.querySelector('.note-form');
        if (form) {
            form.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        this.showNotification('Editing note', 'info');
    },

    /**
     * Delete a note
     */
    deleteNote(noteId) {
        if (!confirm('Delete this note? This cannot be undone.')) return;

        let notes = this.getStoredNotes();
        notes = notes.filter(n => n.id !== noteId);

        this.saveStoredNotes(notes);
        this.loadNotes();

        // If we were editing this note, clear the form
        if (this.editingNoteId === noteId) {
            this.clearForm();
        }

        this.showNotification('Note deleted', 'success');
    },

    /**
     * Copy note to clipboard
     */
    async copyNote(noteId) {
        const notes = this.getStoredNotes();
        const note = notes.find(n => n.id === noteId);

        if (!note) return;

        const text = `${note.title}\n${'='.repeat(note.title.length)}\n\n${note.body}`;

        try {
            await navigator.clipboard.writeText(text);
            this.showNotification('Copied to clipboard', 'success');
        } catch (e) {
            // Fallback
            const textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            this.showNotification('Copied to clipboard', 'success');
        }
    },

    /**
     * Send note to campaign canvas
     */
    sendToCanvas(noteId) {
        const notes = this.getStoredNotes();
        const note = notes.find(n => n.id === noteId);

        if (!note) {
            this.showNotification('Note not found', 'error');
            return;
        }

        if (typeof CanvasCards !== 'undefined') {
            CanvasCards.addCard('note', note);

            // Switch to campaign panel
            if (typeof Sidebar !== 'undefined') {
                Sidebar.switchPanel('campaign');
            }
        } else {
            this.showNotification('Campaign canvas not available', 'error');
        }
    },

    /**
     * View full note in a modal
     */
    viewNote(noteId) {
        const notes = this.getStoredNotes();
        const note = notes.find(n => n.id === noteId);

        if (!note) return;

        const categoryColor = this.categoryColors[note.category] || this.categoryColors.general;
        const categoryLabel = this.categoryLabels[note.category] || 'General';

        const modal = document.createElement('div');
        modal.className = 'note-modal';
        modal.innerHTML = `
            <div class="note-modal-backdrop"></div>
            <div class="note-modal-content">
                <button class="note-modal-close">&times;</button>
                <div class="note-modal-header" style="border-left-color: ${categoryColor}">
                    <h2>${this.escapeHtml(note.title)}</h2>
                    <span class="note-modal-category" style="background: ${categoryColor}">${categoryLabel}</span>
                </div>
                <div class="note-modal-body">
                    ${this.escapeHtml(note.body).replace(/\n/g, '<br>')}
                </div>
            </div>
        `;

        modal.querySelector('.note-modal-backdrop').addEventListener('click', () => modal.remove());
        modal.querySelector('.note-modal-close').addEventListener('click', () => modal.remove());

        document.body.appendChild(modal);
    },

    /**
     * Escape HTML to prevent XSS
     */
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    },

    /**
     * Show notification
     */
    showNotification(message, type = 'info') {
        if (typeof showNotification === 'function') {
            showNotification(message, type);
            return;
        }

        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            padding: 12px 24px;
            background: ${type === 'success' ? '#4caf50' : type === 'error' ? '#f44336' : '#2196f3'};
            color: white;
            border-radius: 6px;
            z-index: 10000;
            animation: slideIn 0.3s ease;
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'fadeOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 2000);
    }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => NotesPanel.init(), 100);
});
