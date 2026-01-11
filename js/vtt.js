/**
 * VTT Battlemap Manager
 * Virtual tabletop system with tokens, fog of war, and initiative tracking
 */

const VTTManager = {
    // Canvas state
    canvas: null,
    gridLayer: null,
    backgroundLayer: null,
    tokenLayer: null,
    fogLayer: null,
    measureLayer: null,

    // Transform state
    scale: 1,
    offsetX: 0,
    offsetY: 0,

    // Interaction state
    isPanning: false,
    panStartX: 0,
    panStartY: 0,
    lastTouchDistance: 0,
    isPinching: false,

    // Grid settings
    gridSize: 50,
    gridOpacity: 0.3,

    // Tool state
    currentTool: 'select',
    isDrawing: false,
    drawStartX: 0,
    drawStartY: 0,

    // Token state
    tokens: [],
    selectedToken: null,
    draggedToken: null,
    dragOffsetX: 0,
    dragOffsetY: 0,

    // Fog of war
    fogCells: [],

    // Map manipulation state
    mapX: 0,
    mapY: 0,
    mapWidth: 0,
    mapHeight: 0,
    mapDragging: false,
    mapResizing: false,
    mapResizeHandle: null,
    mapDragStartScreenX: 0,
    mapDragStartScreenY: 0,
    mapResizeStartScreenX: 0,
    mapResizeStartScreenY: 0,
    mapStartWidth: 0,
    mapStartHeight: 0,
    mapOrigX: 0,
    mapOrigY: 0,

    // Undo history
    undoHistory: [],
    maxUndoHistory: 50,

    // Initiative
    initiative: [],
    currentTurn: 0,
    round: 1,

    // Settings
    settings: {
        showHP: true,
        showAC: true,
        showConditions: true
    },

    // Maps
    maps: [],
    currentMap: null,

    // Monster favorites
    favorites: [],

    // Saved token templates (player characters with custom art)
    savedTokens: [],

    // Dice roller state
    currentDie: 20,
    diceCount: 1,
    diceRollerDragging: false,
    diceRollerOffsetX: 0,
    diceRollerOffsetY: 0,

    // D&D 5e Conditions
    conditions: [
        { id: 'blinded', name: 'Blinded', icon: 'B' },
        { id: 'charmed', name: 'Charmed', icon: 'C' },
        { id: 'deafened', name: 'Deafened', icon: 'D' },
        { id: 'frightened', name: 'Frightened', icon: 'F' },
        { id: 'grappled', name: 'Grappled', icon: 'G' },
        { id: 'incapacitated', name: 'Incapacitated', icon: 'I' },
        { id: 'invisible', name: 'Invisible', icon: '?' },
        { id: 'paralyzed', name: 'Paralyzed', icon: 'P' },
        { id: 'petrified', name: 'Petrified', icon: 'S' },
        { id: 'poisoned', name: 'Poisoned', icon: 'X' },
        { id: 'prone', name: 'Prone', icon: 'Pr' },
        { id: 'restrained', name: 'Restrained', icon: 'R' },
        { id: 'stunned', name: 'Stunned', icon: 'St' },
        { id: 'unconscious', name: 'Unconscious', icon: 'U' },
        { id: 'exhaustion', name: 'Exhaustion', icon: 'E' },
        { id: 'concentration', name: 'Concentration', icon: 'Co' }
    ],

    // Monster type icons (SVG paths for token display)
    monsterTypeIcons: {
        aberration: '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="10" r="6"/><circle cx="12" cy="10" r="3" fill="white"/><circle cx="12" cy="10" r="1.5"/><path d="M6 10c-2-1-3-3-2-5M18 10c2-1 3-3 2-5M8 16c-1 2-1 4 0 5M16 16c1 2 1 4 0 5M12 16v5" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>',
        beast: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 4c-1 0-2 1-3 2-1-1-3-1-4 0s-1 3 0 4c-2 1-3 3-2 5 0 2 2 3 4 3h10c2 0 4-1 4-3 1-2 0-4-2-5 1-1 1-3 0-4s-3-1-4 0c-1-1-2-2-3-2z"/><circle cx="9" cy="11" r="1.5" fill="white"/><circle cx="15" cy="11" r="1.5" fill="white"/><ellipse cx="12" cy="14" rx="2" ry="1.5"/></svg>',
        celestial: '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="4"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" stroke="currentColor" stroke-width="2" fill="none"/></svg>',
        construct: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="7" y="4" width="10" height="8" rx="1"/><rect x="9" y="14" width="6" height="6" rx="1"/><circle cx="10" cy="8" r="1.5" fill="white"/><circle cx="14" cy="8" r="1.5" fill="white"/><rect x="6" y="14" width="3" height="4" rx="0.5"/><rect x="15" y="14" width="3" height="4" rx="0.5"/></svg>',
        dragon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3c-2 0-4 2-5 4-2 0-4 1-4 3 0 1 1 2 2 2-1 1-1 3 0 4 1 2 3 2 5 2h0c2 0 4 0 5-2 1-1 1-3 0-4 1 0 2-1 2-2 0-2-2-3-4-3-1-2-3-4-5-4z"/><path d="M6 6c-1-2-1-4 1-5M18 6c1-2 1-4-1-5" stroke="currentColor" stroke-width="1.5" fill="none"/><circle cx="9" cy="10" r="1.5" fill="white"/><circle cx="15" cy="10" r="1.5" fill="white"/><path d="M10 14h4" stroke="white" stroke-width="1"/></svg>',
        elemental: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3c-1 2-4 4-4 7 0 3 2 5 4 5s4-2 4-5c0-3-3-5-4-7z"/><path d="M12 8c-.5 1-2 2-2 3.5 0 1.5 1 2.5 2 2.5s2-1 2-2.5c0-1.5-1.5-2.5-2-3.5z" fill="white"/><path d="M8 17c-2 1-4 2-4 4h16c0-2-2-3-4-4" fill="currentColor"/></svg>',
        fey: '<svg viewBox="0 0 24 24" fill="currentColor"><ellipse cx="12" cy="13" rx="4" ry="5"/><path d="M8 8c-3-2-6-1-7 1 2 1 4 2 5 4M16 8c3-2 6-1 7 1-2 1-4 2-5 4" fill="currentColor"/><circle cx="10" cy="12" r="1" fill="white"/><circle cx="14" cy="12" r="1" fill="white"/><path d="M12 6v-3M10 4l2-2 2 2" stroke="currentColor" stroke-width="1" fill="none"/></svg>',
        fiend: '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="13" r="6"/><path d="M6 8c-1-3 0-5 2-6l1 4M18 8c1-3 0-5-2-6l-1 4"/><circle cx="9" cy="12" r="1.5" fill="white"/><circle cx="15" cy="12" r="1.5" fill="white"/><path d="M9 16c1.5 1 4.5 1 6 0" stroke="white" stroke-width="1" fill="none"/></svg>',
        giant: '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="8" r="5"/><path d="M7 14h10v6c0 1-2 2-5 2s-5-1-5-2v-6z"/><circle cx="10" cy="7" r="1.5" fill="white"/><circle cx="14" cy="7" r="1.5" fill="white"/><rect x="9" y="10" width="6" height="2" rx="1"/></svg>',
        humanoid: '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="6" r="4"/><path d="M12 10c-4 0-7 2-7 5v5h14v-5c0-3-3-5-7-5z"/></svg>',
        monstrosity: '<svg viewBox="0 0 24 24" fill="currentColor"><ellipse cx="12" cy="12" rx="7" ry="6"/><circle cx="8" cy="10" r="1.5" fill="white"/><circle cx="12" cy="9" r="1.5" fill="white"/><circle cx="16" cy="10" r="1.5" fill="white"/><path d="M6 6l-2-3M18 6l2-3M6 18l-2 3M18 18l2 3M12 18v3" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M8 14c2 1.5 6 1.5 8 0" stroke="white" stroke-width="1" fill="none"/></svg>',
        ooze: '<svg viewBox="0 0 24 24" fill="currentColor"><ellipse cx="12" cy="14" rx="8" ry="5"/><ellipse cx="8" cy="10" rx="3" ry="2"/><ellipse cx="16" cy="11" rx="2" ry="1.5"/><circle cx="10" cy="14" r="1.5" fill="white"/><circle cx="15" cy="13" r="1" fill="white"/></svg>',
        plant: '<svg viewBox="0 0 24 24" fill="currentColor"><ellipse cx="12" cy="16" rx="5" ry="4"/><path d="M12 12V6M9 8c-2-2-2-5 0-6 1 2 2 4 3 6M15 8c2-2 2-5 0-6-1 2-2 4-3 6"/><circle cx="10" cy="15" r="1" fill="white"/><circle cx="14" cy="15" r="1" fill="white"/><path d="M10 18c1 .5 3 .5 4 0" stroke="white" stroke-width="1" fill="none"/></svg>',
        undead: '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="10" r="7"/><ellipse cx="9" cy="9" rx="2" ry="2.5" fill="white"/><ellipse cx="15" cy="9" rx="2" ry="2.5" fill="white"/><circle cx="9" cy="9" r="1"/><circle cx="15" cy="9" r="1"/><ellipse cx="12" cy="14" rx="1.5" ry="1"/><path d="M8 17v4M10 17v3M12 17v4M14 17v3M16 17v4" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>',
        swarm: '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="8" cy="8" r="3"/><circle cx="16" cy="7" r="2.5"/><circle cx="12" cy="12" r="3"/><circle cx="6" cy="14" r="2"/><circle cx="17" cy="14" r="2.5"/><circle cx="10" cy="17" r="2"/><circle cx="15" cy="18" r="2"/></svg>'
    },

    /**
     * Get icon SVG for a monster based on its type
     */
    getMonsterIcon(monster, size) {
        if (!monster) return null;

        // Get monster type, handling both SRD and generated formats
        let type = monster.type || '';

        // Handle "swarm of X" types
        if (type.toLowerCase().includes('swarm')) {
            type = 'swarm';
        }

        // Normalize type (extract base type from strings like "humanoid (goblinoid)")
        type = type.toLowerCase().split('(')[0].trim();

        const iconSvg = this.monsterTypeIcons[type];
        if (!iconSvg) return null;

        const iconSize = size * 0.5;
        return `<div style="width: ${iconSize}px; height: ${iconSize}px; color: white; filter: drop-shadow(0 1px 2px rgba(0,0,0,0.5));">${iconSvg}</div>`;
    },

    /**
     * Initialize the VTT
     */
    init() {
        this.canvas = document.getElementById('vtt-canvas');
        this.gridLayer = document.getElementById('vtt-grid-layer');
        this.backgroundLayer = document.getElementById('vtt-background-layer');
        this.tokenLayer = document.getElementById('vtt-token-layer');
        this.fogLayer = document.getElementById('vtt-fog-layer');
        this.measureLayer = document.getElementById('vtt-measure-layer');

        if (!this.canvas) {
            console.warn('VTT canvas not found');
            return;
        }

        this.loadSettings();
        this.loadMaps();
        this.loadFavorites();
        this.loadSavedTokens();
        this.bindEvents();
        this.updateGrid();
        this.loadMonsterLibrary();
        this.initMapControls();
    },

    /**
     * Bind all events
     */
    bindEvents() {
        // Pan events
        this.canvas.addEventListener('mousedown', (e) => this.onMouseDown(e));
        this.canvas.addEventListener('mousemove', (e) => this.onMouseMove(e));
        this.canvas.addEventListener('mouseup', (e) => this.onMouseUp(e));
        this.canvas.addEventListener('mouseleave', (e) => this.onMouseUp(e));

        // Zoom events
        this.canvas.addEventListener('wheel', (e) => this.onWheel(e), { passive: false });

        // Touch events
        this.canvas.addEventListener('touchstart', (e) => this.onTouchStart(e), { passive: false });
        this.canvas.addEventListener('touchmove', (e) => this.onTouchMove(e), { passive: false });
        this.canvas.addEventListener('touchend', (e) => this.onTouchEnd(e));

        // Context menu
        this.canvas.addEventListener('contextmenu', (e) => this.onContextMenu(e));

        // Close context menu and deselect token on click elsewhere
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.vtt-context-menu')) {
                this.closeContextMenu();
            }
            // Deselect token when clicking on canvas (not on token or action bubbles)
            if (e.target.closest('.vtt-canvas') && !e.target.closest('.vtt-token') && !e.target.closest('.vtt-action-bubble')) {
                this.deselectToken();
            }
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => this.onKeyDown(e));

        // Dice roller drag events
        this.initDiceRollerDrag();
    },

    /**
     * Initialize dice roller drag functionality
     */
    initDiceRollerDrag() {
        const diceRoller = document.getElementById('vtt-dice-roller');
        const toggle = document.querySelector('.vtt-dice-toggle');
        if (!diceRoller || !toggle) return;

        // Track drag state
        this.diceRollerStartX = 0;
        this.diceRollerStartY = 0;
        this.diceRollerMoved = false;

        // Mouse events on toggle button
        toggle.addEventListener('mousedown', (e) => this.onDiceRollerDragStart(e));
        document.addEventListener('mousemove', (e) => this.onDiceRollerDrag(e));
        document.addEventListener('mouseup', (e) => this.onDiceRollerDragEnd(e));

        // Touch events on toggle button
        toggle.addEventListener('touchstart', (e) => this.onDiceRollerTouchStart(e), { passive: false });
        document.addEventListener('touchmove', (e) => this.onDiceRollerTouchMove(e), { passive: false });
        document.addEventListener('touchend', (e) => this.onDiceRollerTouchEnd(e));

        // Override the onclick to check if we dragged
        toggle.onclick = null;
        toggle.removeAttribute('onclick');
    },

    onDiceRollerDragStart(e) {
        const diceRoller = document.getElementById('vtt-dice-roller');
        if (!diceRoller) return;

        this.diceRollerDragging = true;
        this.diceRollerMoved = false;
        this.diceRollerStartX = e.clientX;
        this.diceRollerStartY = e.clientY;
        diceRoller.classList.add('dragging');

        // Store the current position of the dice roller
        const rollerRect = diceRoller.getBoundingClientRect();
        this.diceRollerOffsetX = e.clientX - rollerRect.left;
        this.diceRollerOffsetY = e.clientY - rollerRect.top;

        e.preventDefault();
    },

    onDiceRollerDrag(e) {
        if (!this.diceRollerDragging) return;

        const diceRoller = document.getElementById('vtt-dice-roller');
        const container = document.querySelector('.vtt-container');
        const toolbar = document.querySelector('.vtt-toolbar');
        const gridSettings = document.querySelector('.vtt-grid-settings');
        const sidebar = document.getElementById('vtt-sidebar');
        const mobileActions = document.querySelector('.vtt-mobile-actions');
        if (!diceRoller || !container) return;

        // Check if we've moved enough to consider it a drag
        const dx = Math.abs(e.clientX - this.diceRollerStartX);
        const dy = Math.abs(e.clientY - this.diceRollerStartY);
        if (dx > 5 || dy > 5) {
            this.diceRollerMoved = true;
        }

        if (!this.diceRollerMoved) return;

        const containerRect = container.getBoundingClientRect();
        const toolbarHeight = toolbar ? toolbar.offsetHeight : 60;
        const gridSettingsHeight = gridSettings ? gridSettings.offsetHeight : 0;
        const sidebarWidth = sidebar && sidebar.classList.contains('open') ? sidebar.offsetWidth : 0;
        const mobileActionsHeight = mobileActions ? mobileActions.offsetHeight : 0;

        // Calculate new position relative to container
        let newX = e.clientX - containerRect.left - this.diceRollerOffsetX;
        let newY = e.clientY - containerRect.top - this.diceRollerOffsetY;

        // Constrain to map area only (below toolbar and grid settings, left of sidebar, above mobile actions)
        const minX = 8;
        const minY = toolbarHeight + gridSettingsHeight + 16;
        const maxX = containerRect.width - diceRoller.offsetWidth - sidebarWidth - 8;
        const maxY = containerRect.height - diceRoller.offsetHeight - mobileActionsHeight - 8;

        newX = Math.max(minX, Math.min(newX, maxX));
        newY = Math.max(minY, Math.min(newY, maxY));

        // Apply position
        diceRoller.style.right = 'auto';
        diceRoller.style.left = newX + 'px';
        diceRoller.style.top = newY + 'px';
    },

    onDiceRollerDragEnd(e) {
        if (!this.diceRollerDragging) return;

        const wasDragging = this.diceRollerMoved;
        this.diceRollerDragging = false;
        this.diceRollerMoved = false;

        const diceRoller = document.getElementById('vtt-dice-roller');
        if (diceRoller) {
            diceRoller.classList.remove('dragging');
        }

        // If we didn't move, toggle the panel
        if (!wasDragging) {
            this.toggleDiceRoller();
        }
    },

    onDiceRollerTouchStart(e) {
        if (e.touches.length !== 1) return;

        const diceRoller = document.getElementById('vtt-dice-roller');
        if (!diceRoller) return;

        const touch = e.touches[0];
        this.diceRollerDragging = true;
        this.diceRollerMoved = false;
        this.diceRollerStartX = touch.clientX;
        this.diceRollerStartY = touch.clientY;
        diceRoller.classList.add('dragging');

        // Store the offset from the touch point to the dice roller's position
        const rollerRect = diceRoller.getBoundingClientRect();
        this.diceRollerOffsetX = touch.clientX - rollerRect.left;
        this.diceRollerOffsetY = touch.clientY - rollerRect.top;

        e.preventDefault();
    },

    onDiceRollerTouchMove(e) {
        if (!this.diceRollerDragging) return;

        const diceRoller = document.getElementById('vtt-dice-roller');
        const container = document.querySelector('.vtt-container');
        const toolbar = document.querySelector('.vtt-toolbar');
        const gridSettings = document.querySelector('.vtt-grid-settings');
        const sidebar = document.getElementById('vtt-sidebar');
        const mobileActions = document.querySelector('.vtt-mobile-actions');
        if (!diceRoller || !container) return;

        const touch = e.touches[0];

        // Check if we've moved enough to consider it a drag
        const dx = Math.abs(touch.clientX - this.diceRollerStartX);
        const dy = Math.abs(touch.clientY - this.diceRollerStartY);
        if (dx > 5 || dy > 5) {
            this.diceRollerMoved = true;
        }

        if (!this.diceRollerMoved) return;

        const containerRect = container.getBoundingClientRect();
        const toolbarHeight = toolbar ? toolbar.offsetHeight : 60;
        const gridSettingsHeight = gridSettings ? gridSettings.offsetHeight : 0;
        const sidebarWidth = sidebar && sidebar.classList.contains('open') ? sidebar.offsetWidth : 0;
        const mobileActionsHeight = mobileActions ? mobileActions.offsetHeight : 0;

        let newX = touch.clientX - containerRect.left - this.diceRollerOffsetX;
        let newY = touch.clientY - containerRect.top - this.diceRollerOffsetY;

        // Constrain to map area only (below toolbar and grid settings, left of sidebar, above mobile actions)
        const minX = 8;
        const minY = toolbarHeight + gridSettingsHeight + 16;
        const maxX = containerRect.width - diceRoller.offsetWidth - sidebarWidth - 8;
        const maxY = containerRect.height - diceRoller.offsetHeight - mobileActionsHeight - 8;

        newX = Math.max(minX, Math.min(newX, maxX));
        newY = Math.max(minY, Math.min(newY, maxY));

        diceRoller.style.right = 'auto';
        diceRoller.style.left = newX + 'px';
        diceRoller.style.top = newY + 'px';

        e.preventDefault();
    },

    onDiceRollerTouchEnd(e) {
        if (!this.diceRollerDragging) return;

        const wasDragging = this.diceRollerMoved;
        this.diceRollerDragging = false;
        this.diceRollerMoved = false;

        const diceRoller = document.getElementById('vtt-dice-roller');
        if (diceRoller) {
            diceRoller.classList.remove('dragging');
        }

        // If we didn't move, toggle the panel
        if (!wasDragging) {
            this.toggleDiceRoller();
        }
    },

    /**
     * Mouse events
     */
    onMouseDown(e) {
        if (e.target.closest('.vtt-token')) return;
        if (e.button !== 0) return;

        const rect = this.canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (this.currentTool === 'ruler') {
            this.startMeasure(x, y);
        } else if (this.currentTool === 'fog') {
            this.startFog(x, y);
        } else if (this.currentTool === 'eraser') {
            this.startErase(x, y);
        } else {
            this.isPanning = true;
            this.panStartX = e.clientX - this.offsetX;
            this.panStartY = e.clientY - this.offsetY;
            this.canvas.style.cursor = 'grabbing';
        }
    },

    onMouseMove(e) {
        const rect = this.canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (this.draggedToken) {
            this.moveToken(e.clientX, e.clientY);
            this.updateBubblePositions(this.draggedToken);
        } else if (this.isPanning) {
            this.offsetX = e.clientX - this.panStartX;
            this.offsetY = e.clientY - this.panStartY;
            this.updateTransform();
        } else if (this.currentTool === 'ruler' && this.isDrawing) {
            this.updateMeasure(x, y);
        } else if ((this.currentTool === 'fog' || this.currentTool === 'eraser') && this.isDrawing) {
            this.continueFog(x, y);
        }
    },

    onMouseUp(e) {
        if (this.draggedToken) {
            this.dropToken();
        }
        if (this.isPanning) {
            this.isPanning = false;
            this.canvas.style.cursor = 'grab';
        }
        if (this.isDrawing && this.currentTool === 'ruler') {
            this.endMeasure();
        }
        if (this.isDrawing && (this.currentTool === 'fog' || this.currentTool === 'eraser')) {
            this.endFog();
        }
    },

    /**
     * Touch events
     */
    onTouchStart(e) {
        if (e.touches.length === 2) {
            e.preventDefault();
            // Starting pinch gesture - cancel any token interaction
            this.isPinching = true;
            if (this.touchedToken) {
                clearTimeout(this.longPressTimer);
                this.touchedToken = null;
                this.draggedToken = null;
                this.touchMoved = false;
            }
            const dx = e.touches[0].clientX - e.touches[1].clientX;
            const dy = e.touches[0].clientY - e.touches[1].clientY;
            this.lastTouchDistance = Math.sqrt(dx * dx + dy * dy);
            return;
        }

        if (e.target.closest('.vtt-token')) return;

        const touch = e.touches[0];
        const rect = this.canvas.getBoundingClientRect();
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;

        if (this.currentTool === 'ruler') {
            e.preventDefault();
            this.startMeasure(x, y);
        } else if (this.currentTool === 'fog') {
            e.preventDefault();
            this.startFog(x, y);
        } else if (this.currentTool === 'eraser') {
            e.preventDefault();
            this.startErase(x, y);
        } else {
            this.isPanning = true;
            this.panStartX = touch.clientX - this.offsetX;
            this.panStartY = touch.clientY - this.offsetY;
        }
    },

    onTouchMove(e) {
        if (e.touches.length === 2) {
            e.preventDefault();
            const dx = e.touches[0].clientX - e.touches[1].clientX;
            const dy = e.touches[0].clientY - e.touches[1].clientY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const delta = distance - this.lastTouchDistance;
            this.lastTouchDistance = distance;

            const centerX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
            const centerY = (e.touches[0].clientY + e.touches[1].clientY) / 2;
            const rect = this.canvas.getBoundingClientRect();
            const x = centerX - rect.left;
            const y = centerY - rect.top;

            this.zoom(delta * 0.01, x, y);
            return;
        }

        const touch = e.touches[0];
        const rect = this.canvas.getBoundingClientRect();
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;

        if (this.draggedToken) {
            e.preventDefault();
            this.moveToken(touch.clientX, touch.clientY);
            this.updateBubblePositions(this.draggedToken);
        } else if (this.touchedToken) {
            // Handle case where touch moved off token element before draggedToken was set
            const dx = touch.clientX - this.touchStartX;
            const dy = touch.clientY - this.touchStartY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance > 10) {
                e.preventDefault();
                this.touchMoved = true;
                clearTimeout(this.longPressTimer);
                this.draggedToken = this.touchedToken;
                this.moveToken(touch.clientX, touch.clientY);
                this.updateBubblePositions(this.touchedToken);
            }
        } else if (this.isPanning) {
            e.preventDefault();
            this.offsetX = touch.clientX - this.panStartX;
            this.offsetY = touch.clientY - this.panStartY;
            this.updateTransform();
        } else if (this.currentTool === 'ruler' && this.isDrawing) {
            e.preventDefault();
            this.updateMeasure(x, y);
        } else if ((this.currentTool === 'fog' || this.currentTool === 'eraser') && this.isDrawing) {
            e.preventDefault();
            this.continueFog(x, y);
        }
    },

    onTouchEnd(e) {
        this.onMouseUp(e);
        this.lastTouchDistance = 0;
        // Only reset pinching when all fingers are lifted
        if (e.touches.length === 0) {
            this.isPinching = false;
        }
    },

    /**
     * Wheel zoom
     */
    onWheel(e) {
        e.preventDefault();
        const rect = this.canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const delta = e.deltaY > 0 ? -0.1 : 0.1;
        this.zoom(delta, x, y);
    },

    /**
     * Context menu
     */
    onContextMenu(e) {
        e.preventDefault();
        // Will be handled by token context menu
    },

    /**
     * Keyboard shortcuts
     */
    onKeyDown(e) {
        // Only handle when VTT panel is active
        const vttPanel = document.getElementById('panel-vtt');
        if (!vttPanel?.classList.contains('active')) return;

        if (e.key === 'Delete' && this.selectedToken) {
            this.removeToken(this.selectedToken.id);
        }
        if (e.key === 'Escape') {
            this.deselectToken();
            this.closeContextMenu();
        }
        if (e.key === '1') this.setTool('select');
        if (e.key === '2') this.setTool('fog');
        if (e.key === '3') this.setTool('eraser');
        if (e.key === '4') this.setTool('ruler');
    },

    /**
     * Zoom controls
     */
    zoom(delta, x, y) {
        const oldScale = this.scale;
        this.scale = Math.min(3, Math.max(0.25, this.scale + delta));

        // Zoom toward mouse position
        const scaleChange = this.scale / oldScale;
        this.offsetX = x - (x - this.offsetX) * scaleChange;
        this.offsetY = y - (y - this.offsetY) * scaleChange;

        this.updateTransform();
    },

    zoomIn() {
        const rect = this.canvas.getBoundingClientRect();
        this.zoom(0.2, rect.width / 2, rect.height / 2);
    },

    zoomOut() {
        const rect = this.canvas.getBoundingClientRect();
        this.zoom(-0.2, rect.width / 2, rect.height / 2);
    },

    resetView() {
        this.scale = 1;
        this.offsetX = 0;
        this.offsetY = 0;
        this.updateTransform();
    },

    updateTransform() {
        const transform = `translate(${this.offsetX}px, ${this.offsetY}px) scale(${this.scale})`;
        this.gridLayer.style.transform = transform;
        this.backgroundLayer.style.transform = transform;
        this.tokenLayer.style.transform = transform;
        this.fogLayer.style.transform = transform;
        const toolOverlay = document.getElementById('vtt-tool-overlay');
        if (toolOverlay) toolOverlay.style.transform = transform;
        // Note: measureLayer is NOT transformed - it uses screen coordinates
        // Note: mapControls is NOT transformed - it uses screen coordinates calculated in updateMapControls()

        // Update map controls position when transform changes (they use screen space)
        if (this.currentTool === 'map') {
            this.updateMapControls();
        }

        document.getElementById('vtt-zoom-level').textContent = Math.round(this.scale * 100) + '%';

        // Update bubble positions if a token is selected
        if (this.selectedToken) {
            this.updateBubblePositions(this.selectedToken);
        }
    },

    /**
     * Grid controls
     */
    updateGridSize(value) {
        this.gridSize = parseInt(value);
        document.getElementById('vtt-grid-size-value').textContent = value + 'px';
        this.updateGrid();
        this.renderTokens();  // Re-render tokens to update their sizes
        this.saveState();
    },

    updateGridOpacity(value) {
        this.gridOpacity = parseInt(value) / 100;
        document.getElementById('vtt-grid-opacity-value').textContent = value + '%';
        this.gridLayer.style.opacity = this.gridOpacity;
        this.saveState();
    },

    updateGrid() {
        this.gridLayer.style.backgroundSize = `${this.gridSize}px ${this.gridSize}px`;
    },

    /**
     * Background map
     */
    uploadBackground(file) {
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            const dataUrl = e.target.result;

            // Load image to get natural dimensions
            const img = new Image();
            img.onload = () => {
                // Get canvas dimensions for scaling
                const canvasRect = this.canvas.getBoundingClientRect();
                const canvasWidth = canvasRect.width;
                const canvasHeight = canvasRect.height;

                // Scale image to fit within canvas while maintaining aspect ratio
                const scale = Math.min(
                    canvasWidth / img.naturalWidth,
                    canvasHeight / img.naturalHeight,
                    1 // Don't upscale
                );

                this.mapWidth = Math.round(img.naturalWidth * scale);
                this.mapHeight = Math.round(img.naturalHeight * scale);
                this.mapX = 0;
                this.mapY = 0;

                // Apply the background with proper sizing
                this.backgroundLayer.style.backgroundImage = `url(${dataUrl})`;
                this.applyMapTransform();

                if (this.currentMap) {
                    this.currentMap.background = dataUrl;
                    this.currentMap.mapX = this.mapX;
                    this.currentMap.mapY = this.mapY;
                    this.currentMap.mapWidth = this.mapWidth;
                    this.currentMap.mapHeight = this.mapHeight;
                    this.saveMaps();
                }

                // Update controls if map tool is active
                if (this.currentTool === 'map') {
                    this.updateMapControls();
                }
            };
            img.src = dataUrl;
        };
        reader.readAsDataURL(file);
    },

    clearBackground() {
        this.backgroundLayer.style.backgroundImage = 'none';
        this.mapWidth = 0;
        this.mapHeight = 0;
        this.mapX = 0;
        this.mapY = 0;
        if (this.currentMap) {
            this.currentMap.background = null;
            this.currentMap.mapX = 0;
            this.currentMap.mapY = 0;
            this.currentMap.mapWidth = 0;
            this.currentMap.mapHeight = 0;
            this.saveMaps();
        }
        this.updateMapControls();
    },

    /**
     * Map manipulation
     */
    initMapControls() {
        const mapControls = document.getElementById('vtt-map-controls');
        if (!mapControls) return;

        // Mouse events for handles
        mapControls.querySelectorAll('.vtt-map-handle').forEach(handle => {
            handle.addEventListener('mousedown', (e) => this.onMapResizeStart(e, handle.dataset.handle));
            handle.addEventListener('touchstart', (e) => this.onMapResizeTouchStart(e, handle.dataset.handle), { passive: false });
        });

        // Mouse events for move handle
        const moveHandle = mapControls.querySelector('.vtt-map-move-handle');
        if (moveHandle) {
            moveHandle.addEventListener('mousedown', (e) => this.onMapMoveStart(e));
            moveHandle.addEventListener('touchstart', (e) => this.onMapMoveTouchStart(e), { passive: false });
        }

        // Global mouse/touch move and end
        document.addEventListener('mousemove', (e) => this.onMapDrag(e));
        document.addEventListener('mouseup', (e) => this.onMapDragEnd(e));
        document.addEventListener('touchmove', (e) => this.onMapTouchDrag(e), { passive: false });
        document.addEventListener('touchend', (e) => this.onMapTouchEnd(e));
    },

    updateMapControls() {
        const mapControls = document.getElementById('vtt-map-controls');
        if (!mapControls) return;

        // Only update if we have a valid map with dimensions
        if (this.mapWidth <= 0 || this.mapHeight <= 0) {
            // Hide by removing dimensions - CSS .active will still set display:block
            // but the element will be 0x0
            mapControls.style.width = '0';
            mapControls.style.height = '0';
            return;
        }

        // Calculate SCREEN-SPACE coordinates for the map controls
        // The map image is in world space (transformed by translate + scale)
        // The controls are NOT transformed, so we calculate their screen position directly
        const screenX = this.mapX * this.scale + this.offsetX;
        const screenY = this.mapY * this.scale + this.offsetY;
        const screenWidth = this.mapWidth * this.scale;
        const screenHeight = this.mapHeight * this.scale;

        // Position and size the controls in screen space
        mapControls.style.left = screenX + 'px';
        mapControls.style.top = screenY + 'px';
        mapControls.style.width = screenWidth + 'px';
        mapControls.style.height = screenHeight + 'px';

        // Apply the background image transform (world space)
        this.applyMapTransform();
    },

    applyMapTransform() {
        if (this.mapWidth > 0 && this.mapHeight > 0) {
            this.backgroundLayer.style.backgroundSize = `${this.mapWidth}px ${this.mapHeight}px`;
            this.backgroundLayer.style.backgroundPosition = `${this.mapX}px ${this.mapY}px`;
            this.backgroundLayer.style.backgroundRepeat = 'no-repeat';
        }
    },

    onMapMoveStart(e) {
        e.preventDefault();
        e.stopPropagation();
        this.saveUndoState('Move map');
        this.mapDragging = true;
        // Store starting screen position and original map position
        this.mapDragStartScreenX = e.clientX;
        this.mapDragStartScreenY = e.clientY;
        this.mapOrigX = this.mapX;
        this.mapOrigY = this.mapY;
    },

    onMapMoveTouchStart(e) {
        if (e.touches.length !== 1) return;
        e.preventDefault();
        e.stopPropagation();
        this.saveUndoState('Move map');
        const touch = e.touches[0];
        this.mapDragging = true;
        this.mapDragStartScreenX = touch.clientX;
        this.mapDragStartScreenY = touch.clientY;
        this.mapOrigX = this.mapX;
        this.mapOrigY = this.mapY;
    },

    onMapResizeStart(e, handle) {
        e.preventDefault();
        e.stopPropagation();
        this.saveUndoState('Resize map');
        this.mapResizing = true;
        this.mapResizeHandle = handle;
        this.mapResizeStartScreenX = e.clientX;
        this.mapResizeStartScreenY = e.clientY;
        this.mapStartWidth = this.mapWidth;
        this.mapStartHeight = this.mapHeight;
        this.mapOrigX = this.mapX;
        this.mapOrigY = this.mapY;
    },

    onMapResizeTouchStart(e, handle) {
        if (e.touches.length !== 1) return;
        e.preventDefault();
        e.stopPropagation();
        this.saveUndoState('Resize map');
        const touch = e.touches[0];
        this.mapResizing = true;
        this.mapResizeHandle = handle;
        this.mapResizeStartScreenX = touch.clientX;
        this.mapResizeStartScreenY = touch.clientY;
        this.mapStartWidth = this.mapWidth;
        this.mapStartHeight = this.mapHeight;
        this.mapOrigX = this.mapX;
        this.mapOrigY = this.mapY;
    },

    onMapDrag(e) {
        if (this.mapDragging) {
            // Convert screen delta to canvas delta (account for zoom scale)
            const dx = (e.clientX - this.mapDragStartScreenX) / this.scale;
            const dy = (e.clientY - this.mapDragStartScreenY) / this.scale;
            this.mapX = this.mapOrigX + dx;
            this.mapY = this.mapOrigY + dy;
            this.updateMapControls();
        } else if (this.mapResizing) {
            this.handleMapResize(e.clientX, e.clientY);
        }
    },

    onMapTouchDrag(e) {
        if (!this.mapDragging && !this.mapResizing) return;
        if (e.touches.length !== 1) return;
        e.preventDefault();
        const touch = e.touches[0];

        if (this.mapDragging) {
            // Convert screen delta to canvas delta (account for zoom scale)
            const dx = (touch.clientX - this.mapDragStartScreenX) / this.scale;
            const dy = (touch.clientY - this.mapDragStartScreenY) / this.scale;
            this.mapX = this.mapOrigX + dx;
            this.mapY = this.mapOrigY + dy;
            this.updateMapControls();
        } else if (this.mapResizing) {
            this.handleMapResize(touch.clientX, touch.clientY);
        }
    },

    handleMapResize(clientX, clientY) {
        // Convert screen delta to canvas delta (account for zoom scale)
        const dx = (clientX - this.mapResizeStartScreenX) / this.scale;
        const dy = (clientY - this.mapResizeStartScreenY) / this.scale;
        const handle = this.mapResizeHandle;

        let newWidth = this.mapStartWidth;
        let newHeight = this.mapStartHeight;
        let newX = this.mapOrigX;
        let newY = this.mapOrigY;

        // Handle resize based on which handle is being dragged
        if (handle.includes('e')) {
            newWidth = Math.max(50, this.mapStartWidth + dx);
        }
        if (handle.includes('w')) {
            newWidth = Math.max(50, this.mapStartWidth - dx);
            newX = this.mapOrigX + (this.mapStartWidth - newWidth);
        }
        if (handle.includes('s')) {
            newHeight = Math.max(50, this.mapStartHeight + dy);
        }
        if (handle.includes('n')) {
            newHeight = Math.max(50, this.mapStartHeight - dy);
            newY = this.mapOrigY + (this.mapStartHeight - newHeight);
        }

        this.mapWidth = newWidth;
        this.mapHeight = newHeight;
        this.mapX = newX;
        this.mapY = newY;
        this.updateMapControls();
    },

    onMapDragEnd(e) {
        if (this.mapDragging || this.mapResizing) {
            this.mapDragging = false;
            this.mapResizing = false;
            this.mapResizeHandle = null;
            this.saveMapPosition();
        }
    },

    onMapTouchEnd(e) {
        this.onMapDragEnd(e);
    },

    saveMapPosition() {
        if (this.currentMap) {
            this.currentMap.mapX = this.mapX;
            this.currentMap.mapY = this.mapY;
            this.currentMap.mapWidth = this.mapWidth;
            this.currentMap.mapHeight = this.mapHeight;
            this.saveMaps();
        }
    },

    /**
     * Tool selection
     */
    setTool(tool) {
        this.currentTool = tool;
        document.querySelectorAll('.vtt-tool-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.tool === tool);
        });

        // Deselect token when switching away from select tool
        if (tool !== 'select' && this.selectedToken) {
            this.deselectToken();
        }

        // Show/hide tool overlay to block token interaction
        const toolOverlay = document.getElementById('vtt-tool-overlay');
        if (toolOverlay) {
            if (tool === 'fog' || tool === 'eraser' || tool === 'ruler' || tool === 'map') {
                toolOverlay.classList.add('active');
            } else {
                toolOverlay.classList.remove('active');
            }
        }

        // Show/hide map controls
        const mapControls = document.getElementById('vtt-map-controls');
        if (mapControls) {
            if (tool === 'map') {
                this.updateMapControls();
                mapControls.classList.add('active');
            } else {
                mapControls.classList.remove('active');
            }
        }

        // Update cursor
        if (tool === 'fog' || tool === 'eraser') {
            this.canvas.style.cursor = 'crosshair';
        } else if (tool === 'ruler') {
            this.canvas.style.cursor = 'crosshair';
        } else if (tool === 'map') {
            this.canvas.style.cursor = 'default';
        } else {
            this.canvas.style.cursor = 'grab';
        }
    },

    /**
     * Sidebar controls
     */
    toggleSidebar(panel) {
        const sidebar = document.getElementById('vtt-sidebar');
        const tokensPanel = document.getElementById('vtt-tokens-panel');
        const initiativePanel = document.getElementById('vtt-initiative-panel');

        if (sidebar.classList.contains('open')) {
            // Check if clicking same button
            if (panel === 'tokens' && tokensPanel.classList.contains('active')) {
                sidebar.classList.remove('open');
                return;
            }
            if (panel === 'initiative' && initiativePanel.classList.contains('active')) {
                sidebar.classList.remove('open');
                return;
            }
        }

        sidebar.classList.add('open');
        tokensPanel.classList.toggle('active', panel === 'tokens');
        initiativePanel.classList.toggle('active', panel === 'initiative');

        // Refresh content when showing
        if (panel === 'tokens') {
            this.loadMonsterLibrary();
            this.filterSRDMonsters(); // Load SRD monsters list
        }
        if (panel === 'initiative') {
            this.renderInitiativeList();
        }
    },

    closeSidebar() {
        document.getElementById('vtt-sidebar').classList.remove('open');
    },

    /**
     * Settings
     */
    updateSettings() {
        this.settings.showHP = document.getElementById('vtt-show-hp').checked;
        this.settings.showAC = document.getElementById('vtt-show-ac').checked;
        this.settings.showConditions = document.getElementById('vtt-show-conditions').checked;
        this.renderTokens();
        this.saveSettings();
    },

    loadSettings() {
        try {
            const saved = JSON.parse(localStorage.getItem('dmtk_vtt_settings'));
            if (saved) {
                this.settings = { ...this.settings, ...saved };
                if (document.getElementById('vtt-show-hp')) {
                    document.getElementById('vtt-show-hp').checked = this.settings.showHP;
                    document.getElementById('vtt-show-ac').checked = this.settings.showAC;
                    document.getElementById('vtt-show-conditions').checked = this.settings.showConditions;
                }
            }
        } catch (e) {}
    },

    saveSettings() {
        try {
            localStorage.setItem('dmtk_vtt_settings', JSON.stringify(this.settings));
        } catch (e) {}
    },

    /**
     * Player Tokens
     */
    addPlayerToken(color) {
        // Prompt for name and optional stats
        const name = prompt('Player name:', color.charAt(0).toUpperCase() + color.slice(1)) || color;
        const maxHP = parseInt(prompt('Max HP (optional):', '')) || null;
        const ac = parseInt(prompt('AC (optional):', '')) || null;

        // Calculate snap position at center of viewport
        const centerX = (this.canvas.offsetWidth / 2 - this.offsetX) / this.scale;
        const centerY = (this.canvas.offsetHeight / 2 - this.offsetY) / this.scale;
        const snappedX = Math.round(centerX / this.gridSize) * this.gridSize;
        const snappedY = Math.round(centerY / this.gridSize) * this.gridSize;

        const token = {
            id: 'token_' + Date.now(),
            type: 'player',
            color: color,
            name: name,
            x: snappedX,
            y: snappedY,
            sizeMultiplier: 1,  // Store multiplier instead of absolute size
            maxHP: maxHP,
            currentHP: maxHP,
            ac: ac,
            customImage: null,
            conditions: [],
            initiative: null
        };

        this.tokens.push(token);
        this.renderTokens();
        this.saveState();
    },

    /**
     * Monster Tokens
     */
    /**
     * Add a token directly with explicit values (for SRD panel integration)
     */
    addToken(tokenData) {
        // Handle direct values from SRD panel
        const sizeMultipliers = {
            'tiny': 0.5,
            'small': 1,
            'medium': 1,
            'large': 2,
            'huge': 3,
            'gargantuan': 4
        };

        // Parse size from monster data or use default
        let monsterSize = 'medium';
        if (tokenData.monster?.size) {
            monsterSize = tokenData.monster.size.toLowerCase();
        }
        const sizeMultiplier = sizeMultipliers[monsterSize] || 1;

        // Calculate snap position at center of viewport
        const centerX = (this.canvas.offsetWidth / 2 - this.offsetX) / this.scale;
        const centerY = (this.canvas.offsetHeight / 2 - this.offsetY) / this.scale;
        const snappedX = Math.round(centerX / this.gridSize) * this.gridSize;
        const snappedY = Math.round(centerY / this.gridSize) * this.gridSize;

        const token = {
            id: tokenData.id || 'token_' + Date.now(),
            type: tokenData.type || 'monster',
            name: tokenData.name,
            x: snappedX,
            y: snappedY,
            sizeMultiplier: sizeMultiplier,
            maxHP: tokenData.maxHp || tokenData.hp || 10,
            currentHP: tokenData.hp || tokenData.maxHp || 10,
            ac: tokenData.ac || 10,
            color: tokenData.color || '#8b0000',
            customImage: null,
            conditions: [],
            initiative: null,
            monster: tokenData.monster // Store full monster data for reference
        };

        this.tokens.push(token);
        this.renderTokens();
        this.saveState();
        return token;
    },

    addMonsterToken(monster) {
        // Handle both generated monsters (with nested objects) and SRD monsters (with direct values)
        const hp = monster.hitPoints?.average || monster.hp?.average || monster.hp || 10;
        const ac = monster.armorClass?.value || monster.ac?.value || monster.ac || 10;

        // Get size multiplier based on monster size
        const sizeMultipliers = {
            'tiny': 0.5,
            'small': 1,
            'medium': 1,
            'large': 2,
            'huge': 3,
            'gargantuan': 4
        };
        const monsterSize = (monster.size || 'medium').toLowerCase();
        const sizeMultiplier = sizeMultipliers[monsterSize] || 1;

        // Calculate snap position at center of viewport
        const centerX = (this.canvas.offsetWidth / 2 - this.offsetX) / this.scale;
        const centerY = (this.canvas.offsetHeight / 2 - this.offsetY) / this.scale;
        const snappedX = Math.round(centerX / this.gridSize) * this.gridSize;
        const snappedY = Math.round(centerY / this.gridSize) * this.gridSize;

        const token = {
            id: 'token_' + Date.now(),
            type: 'monster',
            monsterId: monster.id,
            name: monster.name,
            x: snappedX,
            y: snappedY,
            sizeMultiplier: sizeMultiplier,  // Store multiplier instead of absolute size
            maxHP: hp,
            currentHP: hp,
            ac: ac,
            customImage: null,
            conditions: [],
            initiative: null
        };

        this.tokens.push(token);
        this.renderTokens();
        this.saveState();
    },

    /**
     * Render tokens
     */
    renderTokens() {
        this.tokenLayer.innerHTML = '';

        this.tokens.forEach(token => {
            // Calculate actual size from multiplier (backward compat: use size if no multiplier)
            const tokenSize = token.sizeMultiplier
                ? this.gridSize * token.sizeMultiplier
                : (token.size || this.gridSize);

            const el = document.createElement('div');
            el.className = `vtt-token ${token.type}${this.selectedToken?.id === token.id ? ' selected' : ''}`;
            el.dataset.tokenId = token.id;
            el.style.left = token.x + 'px';
            el.style.top = token.y + 'px';
            el.style.width = tokenSize + 'px';
            el.style.height = tokenSize + 'px';

            if (token.type === 'player') {
                // Player token with custom image or color
                if (token.customImage) {
                    el.style.backgroundImage = `url(${token.customImage})`;
                    el.style.backgroundSize = 'cover';
                    el.style.backgroundPosition = 'center';
                    el.style.backgroundColor = 'transparent';
                    // No letter overlay when custom art is set
                } else {
                    el.style.backgroundColor = this.getPlayerColor(token.color);
                    el.innerHTML = `<span style="font-size: ${tokenSize * 0.3}px; color: white; text-shadow: 0 1px 2px rgba(0,0,0,0.5);">${token.name.charAt(0)}</span>`;
                }
            }

            // Token content for monsters
            if (token.type === 'monster') {
                if (token.customImage) {
                    el.style.backgroundImage = `url(${token.customImage})`;
                    el.style.backgroundSize = 'cover';
                    el.style.backgroundPosition = 'center';
                    el.style.background = `url(${token.customImage}) center/cover`;  // Override gradient
                    // No letter overlay when custom art is set
                } else {
                    // Try to get a type-based icon, fall back to first letter
                    const icon = this.getMonsterIcon(token.monster, tokenSize);
                    if (icon) {
                        el.innerHTML = icon;
                    } else {
                        el.innerHTML = `<span style="font-size: ${tokenSize * 0.3}px; color: white; text-shadow: 0 1px 2px rgba(0,0,0,0.5);">${token.name.charAt(0)}</span>`;
                    }
                }
            }

            // HP Bar (for any token with HP)
            if (token.maxHP && token.currentHP !== null && this.settings.showHP) {
                const hpPercent = (token.currentHP / token.maxHP) * 100;
                let hpClass = '';
                if (hpPercent <= 25) hpClass = 'critical';
                else if (hpPercent <= 50) hpClass = 'low';

                el.innerHTML += `
                    <div class="vtt-token-hp">
                        <div class="vtt-token-hp-fill ${hpClass}" style="width: ${hpPercent}%"></div>
                    </div>
                `;
            }

            // AC Bubble (for any token with AC)
            if (token.ac && this.settings.showAC) {
                el.innerHTML += `<div class="vtt-token-ac">${token.ac}</div>`;
            }

            // Conditions
            if (this.settings.showConditions && token.conditions.length > 0) {
                const conditionsHtml = token.conditions.map(c => {
                    const cond = this.conditions.find(x => x.id === c);
                    return `<div class="vtt-condition-icon ${c}" title="${cond?.name || c}">${cond?.icon || '?'}</div>`;
                }).join('');
                el.innerHTML += `<div class="vtt-token-conditions">${conditionsHtml}</div>`;
            }

            // Events - only allow token interaction in select mode
            el.addEventListener('mousedown', (e) => {
                if (this.currentTool !== 'select') return;
                this.onTokenMouseDown(e, token);
            });
            el.addEventListener('touchstart', (e) => {
                if (this.currentTool !== 'select') return;
                this.onTokenTouchStart(e, token);
            }, { passive: false });
            el.addEventListener('touchmove', (e) => {
                if (this.currentTool !== 'select') return;
                this.onTokenTouchMove(e, token);
            }, { passive: false });
            el.addEventListener('touchend', (e) => {
                if (this.currentTool !== 'select') return;
                this.onTokenTouchEnd(e, token);
            });
            el.addEventListener('contextmenu', (e) => {
                if (this.currentTool !== 'select') return;
                this.showTokenContextMenu(e, token);
            });
            el.addEventListener('click', (e) => {
                if (this.currentTool !== 'select') return;
                e.stopPropagation();
                this.selectToken(token);
            });

            this.tokenLayer.appendChild(el);
        });
    },

    getPlayerColor(color) {
        const colors = {
            blue: '#4a90d9',
            green: '#5cb85c',
            red: '#d9534f',
            yellow: '#f0ad4e',
            purple: '#9b59b6',
            orange: '#e67e22'
        };
        return colors[color] || colors.blue;
    },

    selectToken(token) {
        const previousToken = this.selectedToken;
        this.selectedToken = token;
        this.renderTokens();

        // Show action bubbles for the selected token
        if (token) {
            // Use setTimeout to ensure DOM is updated before positioning bubbles
            setTimeout(() => this.showTokenActionBubbles(token), 0);
        } else {
            this.hideTokenActionBubbles();
        }
    },

    deselectToken() {
        this.selectedToken = null;
        this.hideTokenActionBubbles();
        this.renderTokens();
    },

    /**
     * Token dragging
     */
    onTokenMouseDown(e, token) {
        if (e.button !== 0) return;
        e.stopPropagation();

        this.saveUndoState(`Move ${token.name}`);

        this.draggedToken = token;
        const rect = this.tokenLayer.getBoundingClientRect();
        this.dragOffsetX = e.clientX - rect.left - token.x * this.scale;
        this.dragOffsetY = e.clientY - rect.top - token.y * this.scale;

        this.selectToken(token);
    },

    onTokenTouchStart(e, token) {
        // If this is a multi-touch gesture (pinch zoom), don't start token interaction
        if (e.touches.length >= 2 || this.isPinching) {
            return;
        }

        e.preventDefault();
        e.stopPropagation();

        const touch = e.touches[0];
        this.touchStartTime = Date.now();
        this.touchStartX = touch.clientX;
        this.touchStartY = touch.clientY;
        this.touchedToken = token;
        this.touchMoved = false;

        // Select immediately for visual feedback
        this.selectToken(token);

        // Set up long-press timer for context menu (500ms)
        this.longPressTimer = setTimeout(() => {
            if (!this.touchMoved && this.touchedToken) {
                // Show context menu on long press
                this.showTokenContextMenu({
                    preventDefault: () => {},
                    stopPropagation: () => {},
                    clientX: this.touchStartX,
                    clientY: this.touchStartY
                }, token);
                this.touchedToken = null;
            }
        }, 500);

        // Prepare for dragging
        const rect = this.tokenLayer.getBoundingClientRect();
        this.dragOffsetX = touch.clientX - rect.left - token.x * this.scale;
        this.dragOffsetY = touch.clientY - rect.top - token.y * this.scale;
    },

    onTokenTouchMove(e, token) {
        // If pinching, cancel token interaction
        if (this.isPinching || e.touches.length >= 2) {
            if (this.touchedToken) {
                clearTimeout(this.longPressTimer);
                this.touchedToken = null;
                this.draggedToken = null;
            }
            return;
        }

        if (!this.touchedToken) return;

        const touch = e.touches[0];
        const dx = touch.clientX - this.touchStartX;
        const dy = touch.clientY - this.touchStartY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // If moved more than 10px, it's a drag not a tap/long-press
        if (distance > 10) {
            this.touchMoved = true;
            clearTimeout(this.longPressTimer);
            this.draggedToken = this.touchedToken;
            this.moveToken(touch.clientX, touch.clientY);
            this.updateBubblePositions(this.touchedToken);
        }
    },

    onTokenTouchEnd(e, token) {
        clearTimeout(this.longPressTimer);

        const touchDuration = Date.now() - this.touchStartTime;

        // If it was a short tap (< 300ms) without movement, just select
        if (touchDuration < 300 && !this.touchMoved) {
            this.selectToken(token);
        }

        // If we were dragging, drop the token
        if (this.draggedToken) {
            this.dropToken();
        }

        this.touchedToken = null;
        this.touchMoved = false;
    },

    moveToken(clientX, clientY) {
        if (!this.draggedToken) return;

        const rect = this.tokenLayer.getBoundingClientRect();
        let x = (clientX - rect.left - this.dragOffsetX) / this.scale;
        let y = (clientY - rect.top - this.dragOffsetY) / this.scale;

        // Snap to grid
        x = Math.round(x / this.gridSize) * this.gridSize;
        y = Math.round(y / this.gridSize) * this.gridSize;

        this.draggedToken.x = x;
        this.draggedToken.y = y;
        this.renderTokens();
    },

    dropToken() {
        if (!this.draggedToken) return;
        this.draggedToken = null;
        this.saveState();
    },

    /**
     * Token context menu
     */
    showTokenContextMenu(e, token) {
        e.preventDefault();
        e.stopPropagation();

        this.closeContextMenu();
        this.selectToken(token);

        const menu = document.createElement('div');
        menu.className = 'vtt-context-menu';
        menu.style.left = e.clientX + 'px';
        menu.style.top = e.clientY + 'px';

        let menuHtml = `
            <div class="vtt-context-menu-item" onclick="VTTManager.renameToken('${token.id}')">Rename</div>
            <div class="vtt-context-menu-item" onclick="VTTManager.editTokenHP('${token.id}')">Edit HP ${token.maxHP ? `(${token.currentHP}/${token.maxHP})` : '(not set)'}</div>
            <div class="vtt-context-menu-item" onclick="VTTManager.editTokenAC('${token.id}')">Edit AC ${token.ac ? `(${token.ac})` : '(not set)'}</div>
            <div class="vtt-context-menu-item" onclick="VTTManager.setTokenImage('${token.id}')">Set Custom Art</div>
            <div class="vtt-context-menu-item" onclick="VTTManager.saveTokenAsTemplate('${token.id}')">Save as Template</div>
            ${token.monster ? `<div class="vtt-context-menu-item" onclick="VTTManager.viewTokenStatblock('${token.id}')">View Statblock</div>` : ''}
        `;

        // Get current size name for highlighting
        const currentMultiplier = token.sizeMultiplier || 1;
        const sizeNames = { 0.5: 'Tiny', 1: 'Medium', 2: 'Large', 3: 'Huge', 4: 'Gargantuan' };

        menuHtml += `
            <div class="vtt-context-submenu">
                <div class="vtt-context-submenu-title">Conditions</div>
                <div class="vtt-condition-grid">
                    ${this.conditions.map(c => `
                        <button class="vtt-condition-btn ${c.id} ${token.conditions.includes(c.id) ? 'active' : ''}"
                                onclick="VTTManager.toggleCondition('${token.id}', '${c.id}')"
                                title="${c.name}">${c.icon}</button>
                    `).join('')}
                </div>
            </div>
            <div class="vtt-context-submenu">
                <div class="vtt-context-submenu-title">Size</div>
                <div class="vtt-size-grid">
                    <button class="vtt-size-btn ${currentMultiplier === 0.5 ? 'active' : ''}" onclick="VTTManager.setTokenSize('${token.id}', 0.5)">Tiny</button>
                    <button class="vtt-size-btn ${currentMultiplier === 1 ? 'active' : ''}" onclick="VTTManager.setTokenSize('${token.id}', 1)">Med</button>
                    <button class="vtt-size-btn ${currentMultiplier === 2 ? 'active' : ''}" onclick="VTTManager.setTokenSize('${token.id}', 2)">Large</button>
                    <button class="vtt-size-btn ${currentMultiplier === 3 ? 'active' : ''}" onclick="VTTManager.setTokenSize('${token.id}', 3)">Huge</button>
                    <button class="vtt-size-btn ${currentMultiplier === 4 ? 'active' : ''}" onclick="VTTManager.setTokenSize('${token.id}', 4)">Garg</button>
                </div>
            </div>
            <div class="vtt-context-menu-item danger" onclick="VTTManager.removeToken('${token.id}')">Remove Token</div>
        `;

        menu.innerHTML = menuHtml;
        document.body.appendChild(menu);

        // Adjust position if off-screen
        const rect = menu.getBoundingClientRect();
        if (rect.right > window.innerWidth) {
            menu.style.left = (e.clientX - rect.width) + 'px';
        }
        if (rect.bottom > window.innerHeight) {
            menu.style.top = (e.clientY - rect.height) + 'px';
        }
    },

    closeContextMenu() {
        document.querySelectorAll('.vtt-context-menu').forEach(m => m.remove());
    },

    renameToken(tokenId) {
        const token = this.tokens.find(t => t.id === tokenId);
        if (!token) return;

        const name = prompt('Token name:', token.name);
        if (name) {
            token.name = name;
            this.renderTokens();
            this.saveState();
        }
        this.closeContextMenu();
    },

    viewTokenStatblock(tokenId) {
        const token = this.tokens.find(t => t.id === tokenId);
        if (!token || !token.monster) return;

        this.closeContextMenu();

        const monster = token.monster;

        // Create modal
        const modal = document.createElement('div');
        modal.className = 'vtt-statblock-modal';
        modal.innerHTML = `
            <div class="vtt-statblock-modal-backdrop"></div>
            <div class="vtt-statblock-modal-content">
                <button class="vtt-statblock-modal-close">&times;</button>
                <div class="vtt-statblock-modal-body">
                    ${this.renderStatblockHTML(monster)}
                </div>
            </div>
        `;

        modal.querySelector('.vtt-statblock-modal-backdrop').addEventListener('click', () => modal.remove());
        modal.querySelector('.vtt-statblock-modal-close').addEventListener('click', () => modal.remove());

        document.body.appendChild(modal);
    },

    renderStatblockHTML(monster) {
        // Check if this is an SRD monster (has 'ac' directly instead of 'armorClass.value')
        if (monster.source === 'SRD' || (monster.ac !== undefined && monster.armorClass === undefined)) {
            // Use SRDPanel's renderStatblock for SRD monsters
            if (typeof SRDPanel !== 'undefined' && SRDPanel.renderStatblock) {
                return SRDPanel.renderStatblock(monster);
            }
        }
        // Generated monsters use StatblockRenderer
        if (typeof StatblockRenderer !== 'undefined') {
            return StatblockRenderer.render(monster, { hideActions: true });
        }
        // Fallback
        return `<pre>${JSON.stringify(monster, null, 2)}</pre>`;
    },

    editTokenHP(tokenId) {
        this.showStatEditor(tokenId, 'hp');
    },

    editTokenAC(tokenId) {
        this.showStatEditor(tokenId, 'ac');
    },

    showStatEditor(tokenId, initialTab = 'hp') {
        const token = this.tokens.find(t => t.id === tokenId);
        if (!token) return;

        this.closeContextMenu();
        this.closeStatEditor();

        const currentHP = token.currentHP ?? '';
        const maxHP = token.maxHP ?? '';
        const ac = token.ac ?? '';

        const editor = document.createElement('div');
        editor.className = 'vtt-stat-editor';
        editor.id = 'vtt-stat-editor';
        editor.innerHTML = `
            <div class="vtt-stat-editor-content">
                <div class="vtt-stat-editor-header">
                    <span class="vtt-stat-editor-title">${token.name || 'Token'}</span>
                    <button class="vtt-stat-editor-close" onclick="VTTManager.closeStatEditor()">&times;</button>
                </div>
                <div class="vtt-stat-editor-tabs">
                    <button class="vtt-stat-tab ${initialTab === 'hp' ? 'active' : ''}" data-tab="hp" onclick="VTTManager.switchStatTab('hp')">HP</button>
                    <button class="vtt-stat-tab ${initialTab === 'ac' ? 'active' : ''}" data-tab="ac" onclick="VTTManager.switchStatTab('ac')">AC</button>
                </div>

                <div class="vtt-stat-panel" id="vtt-stat-panel-hp" style="display: ${initialTab === 'hp' ? 'block' : 'none'}">
                    <div class="vtt-stat-current">
                        <span class="vtt-stat-label">Current HP</span>
                        <span class="vtt-stat-value" id="vtt-hp-display">${currentHP || '—'}${maxHP ? ' / ' + maxHP : ''}</span>
                    </div>
                    <div class="vtt-stat-quick-btns">
                        <button class="vtt-stat-btn damage" onclick="VTTManager.adjustHP('${tokenId}', -10)">-10</button>
                        <button class="vtt-stat-btn damage" onclick="VTTManager.adjustHP('${tokenId}', -5)">-5</button>
                        <button class="vtt-stat-btn damage" onclick="VTTManager.adjustHP('${tokenId}', -1)">-1</button>
                        <button class="vtt-stat-btn heal" onclick="VTTManager.adjustHP('${tokenId}', 1)">+1</button>
                        <button class="vtt-stat-btn heal" onclick="VTTManager.adjustHP('${tokenId}', 5)">+5</button>
                        <button class="vtt-stat-btn heal" onclick="VTTManager.adjustHP('${tokenId}', 10)">+10</button>
                    </div>
                    <div class="vtt-stat-input-row">
                        <input type="text" id="vtt-hp-input" class="vtt-stat-input" placeholder="+10, -5, or set value"
                            onkeydown="if(event.key==='Enter') VTTManager.applyHPChange('${tokenId}')">
                        <button class="vtt-stat-apply" onclick="VTTManager.applyHPChange('${tokenId}')">Apply</button>
                    </div>
                    <div class="vtt-stat-set-row">
                        <div class="vtt-stat-set-field">
                            <label>Current</label>
                            <input type="number" id="vtt-hp-current" class="vtt-stat-small-input" value="${currentHP}" placeholder="HP">
                        </div>
                        <div class="vtt-stat-set-field">
                            <label>Max</label>
                            <input type="number" id="vtt-hp-max" class="vtt-stat-small-input" value="${maxHP}" placeholder="Max">
                        </div>
                        <button class="vtt-stat-set-btn" onclick="VTTManager.setHP('${tokenId}')">Set</button>
                    </div>
                </div>

                <div class="vtt-stat-panel" id="vtt-stat-panel-ac" style="display: ${initialTab === 'ac' ? 'block' : 'none'}">
                    <div class="vtt-stat-current">
                        <span class="vtt-stat-label">Armor Class</span>
                        <span class="vtt-stat-value" id="vtt-ac-display">${ac || '—'}</span>
                    </div>
                    <div class="vtt-stat-quick-btns">
                        <button class="vtt-stat-btn damage" onclick="VTTManager.adjustAC('${tokenId}', -2)">-2</button>
                        <button class="vtt-stat-btn damage" onclick="VTTManager.adjustAC('${tokenId}', -1)">-1</button>
                        <button class="vtt-stat-btn heal" onclick="VTTManager.adjustAC('${tokenId}', 1)">+1</button>
                        <button class="vtt-stat-btn heal" onclick="VTTManager.adjustAC('${tokenId}', 2)">+2</button>
                    </div>
                    <div class="vtt-stat-input-row">
                        <input type="text" id="vtt-ac-input" class="vtt-stat-input" placeholder="+2, -1, or set value"
                            onkeydown="if(event.key==='Enter') VTTManager.applyACChange('${tokenId}')">
                        <button class="vtt-stat-apply" onclick="VTTManager.applyACChange('${tokenId}')">Apply</button>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(editor);

        // Focus the appropriate input
        setTimeout(() => {
            const input = initialTab === 'hp' ? document.getElementById('vtt-hp-input') : document.getElementById('vtt-ac-input');
            if (input) input.focus();
        }, 50);
    },

    closeStatEditor() {
        const editor = document.getElementById('vtt-stat-editor');
        if (editor) editor.remove();
    },

    switchStatTab(tab) {
        document.querySelectorAll('.vtt-stat-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
        document.getElementById('vtt-stat-panel-hp').style.display = tab === 'hp' ? 'block' : 'none';
        document.getElementById('vtt-stat-panel-ac').style.display = tab === 'ac' ? 'block' : 'none';

        const input = tab === 'hp' ? document.getElementById('vtt-hp-input') : document.getElementById('vtt-ac-input');
        if (input) input.focus();
    },

    adjustHP(tokenId, amount) {
        const token = this.tokens.find(t => t.id === tokenId);
        if (!token) return;

        if (token.maxHP && token.currentHP !== null) {
            token.currentHP = Math.max(0, Math.min(token.maxHP, token.currentHP + amount));
        } else if (token.maxHP) {
            token.currentHP = Math.max(0, Math.min(token.maxHP, token.maxHP + amount));
        }

        this.updateStatEditorDisplay(token);
        this.renderTokens();
        this.saveState();
    },

    applyHPChange(tokenId) {
        const token = this.tokens.find(t => t.id === tokenId);
        if (!token) return;

        const input = document.getElementById('vtt-hp-input');
        if (!input) return;

        const value = input.value.trim();
        if (!value) return;

        if (value.startsWith('+') || value.startsWith('-')) {
            // Relative change
            const amount = parseInt(value);
            if (!isNaN(amount) && token.currentHP !== null) {
                token.currentHP = Math.max(0, token.maxHP ? Math.min(token.maxHP, token.currentHP + amount) : token.currentHP + amount);
            }
        } else {
            // Absolute value
            const newHP = parseInt(value);
            if (!isNaN(newHP)) {
                token.currentHP = Math.max(0, token.maxHP ? Math.min(token.maxHP, newHP) : newHP);
            }
        }

        input.value = '';
        this.updateStatEditorDisplay(token);
        this.renderTokens();
        this.saveState();
    },

    setHP(tokenId) {
        const token = this.tokens.find(t => t.id === tokenId);
        if (!token) return;

        const currentInput = document.getElementById('vtt-hp-current');
        const maxInput = document.getElementById('vtt-hp-max');

        const maxHP = parseInt(maxInput?.value) || null;
        const currentHP = parseInt(currentInput?.value) || maxHP;

        token.maxHP = maxHP;
        token.currentHP = maxHP ? Math.max(0, Math.min(maxHP, currentHP)) : currentHP;

        this.updateStatEditorDisplay(token);
        this.renderTokens();
        this.saveState();
    },

    adjustAC(tokenId, amount) {
        const token = this.tokens.find(t => t.id === tokenId);
        if (!token) return;

        token.ac = Math.max(0, (token.ac || 10) + amount);

        this.updateStatEditorDisplay(token);
        this.renderTokens();
        this.saveState();
    },

    applyACChange(tokenId) {
        const token = this.tokens.find(t => t.id === tokenId);
        if (!token) return;

        const input = document.getElementById('vtt-ac-input');
        if (!input) return;

        const value = input.value.trim();
        if (!value) return;

        if (value.startsWith('+') || value.startsWith('-')) {
            const amount = parseInt(value);
            if (!isNaN(amount)) {
                token.ac = Math.max(0, (token.ac || 10) + amount);
            }
        } else {
            const newAC = parseInt(value);
            if (!isNaN(newAC)) {
                token.ac = Math.max(0, newAC);
            }
        }

        input.value = '';
        this.updateStatEditorDisplay(token);
        this.renderTokens();
        this.saveState();
    },

    updateStatEditorDisplay(token) {
        const hpDisplay = document.getElementById('vtt-hp-display');
        const acDisplay = document.getElementById('vtt-ac-display');
        const hpCurrentInput = document.getElementById('vtt-hp-current');
        const hpMaxInput = document.getElementById('vtt-hp-max');

        if (hpDisplay) {
            const hpText = token.currentHP !== null ? token.currentHP : '—';
            hpDisplay.textContent = token.maxHP ? `${hpText} / ${token.maxHP}` : hpText;
        }
        if (acDisplay) {
            acDisplay.textContent = token.ac ?? '—';
        }
        if (hpCurrentInput) hpCurrentInput.value = token.currentHP ?? '';
        if (hpMaxInput) hpMaxInput.value = token.maxHP ?? '';
    },

    setTokenImage(tokenId) {
        const token = this.tokens.find(t => t.id === tokenId);
        if (!token) return;

        // Create file input
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                // Compress image before storing to save localStorage space
                this.compressImage(file, 200, 200, 0.8, (compressedDataUrl) => {
                    token.customImage = compressedDataUrl;
                    this.renderTokens();
                    this.saveState();
                });
            }
        };
        input.click();
        this.closeContextMenu();
    },

    /**
     * Compress an image file to reduce storage size
     */
    compressImage(file, maxWidth, maxHeight, quality, callback) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                // Calculate new dimensions maintaining aspect ratio
                let width = img.width;
                let height = img.height;

                if (width > height) {
                    if (width > maxWidth) {
                        height = Math.round(height * maxWidth / width);
                        width = maxWidth;
                    }
                } else {
                    if (height > maxHeight) {
                        width = Math.round(width * maxHeight / height);
                        height = maxHeight;
                    }
                }

                // Create canvas and draw resized image
                const canvas = document.createElement('canvas');
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);

                // Convert to compressed data URL
                const compressedDataUrl = canvas.toDataURL('image/jpeg', quality);
                callback(compressedDataUrl);
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    },

    toggleCondition(tokenId, conditionId) {
        const token = this.tokens.find(t => t.id === tokenId);
        if (!token) return;

        const idx = token.conditions.indexOf(conditionId);
        if (idx >= 0) {
            token.conditions.splice(idx, 1);
        } else {
            token.conditions.push(conditionId);
        }

        this.renderTokens();
        this.saveState();
    },

    setTokenSize(tokenId, multiplier) {
        const token = this.tokens.find(t => t.id === tokenId);
        if (!token) return;

        token.sizeMultiplier = multiplier;
        this.renderTokens();
        this.saveState();
        this.closeContextMenu();
    },

    removeToken(tokenId) {
        const token = this.tokens.find(t => t.id === tokenId);
        this.saveUndoState(`Remove ${token?.name || 'token'}`);

        this.tokens = this.tokens.filter(t => t.id !== tokenId);
        if (this.selectedToken?.id === tokenId) {
            this.selectedToken = null;
        }
        this.renderTokens();
        this.renderInitiativeList();
        this.saveState();
        this.closeContextMenu();
        this.hideTokenActionBubbles();
    },

    /**
     * Clear all tokens from the map
     */
    clearAllTokens() {
        if (this.tokens.length === 0) return;
        if (!confirm('Remove all tokens from the map?')) return;

        this.saveUndoState('Clear all tokens');

        this.tokens = [];
        this.selectedToken = null;
        this.renderTokens();
        this.renderInitiativeList();
        this.saveState();
        this.hideTokenActionBubbles();
    },

    /**
     * Mobile Action Bubbles
     * Shows move and menu bubbles when a token is selected for easier mobile interaction
     */
    showTokenActionBubbles(token) {
        this.hideTokenActionBubbles();

        const tokenEl = document.querySelector(`[data-token-id="${token.id}"]`);
        if (!tokenEl) return;

        const tokenRect = tokenEl.getBoundingClientRect();
        const tokenSize = token.sizeMultiplier ? this.gridSize * token.sizeMultiplier * this.scale : this.gridSize * this.scale;

        // Create bubble container
        const bubbles = document.createElement('div');
        bubbles.className = 'vtt-token-action-bubbles';
        bubbles.id = 'vtt-action-bubbles';

        // Move bubble (left side)
        const moveBubble = document.createElement('div');
        moveBubble.className = 'vtt-action-bubble vtt-action-move';
        moveBubble.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="5 9 2 12 5 15"></polyline>
                <polyline points="9 5 12 2 15 5"></polyline>
                <polyline points="15 19 12 22 9 19"></polyline>
                <polyline points="19 9 22 12 19 15"></polyline>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <line x1="12" y1="2" x2="12" y2="22"></line>
            </svg>
        `;
        moveBubble.title = 'Drag to move';

        // Menu bubble (right side)
        const menuBubble = document.createElement('div');
        menuBubble.className = 'vtt-action-bubble vtt-action-menu';
        menuBubble.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="12" cy="5" r="1"></circle>
                <circle cx="12" cy="19" r="1"></circle>
            </svg>
        `;
        menuBubble.title = 'Open menu';

        bubbles.appendChild(moveBubble);
        bubbles.appendChild(menuBubble);
        document.body.appendChild(bubbles);

        // Position bubbles relative to token
        this.updateBubblePositions(token);

        // Move bubble - drag events
        moveBubble.addEventListener('mousedown', (e) => this.onMoveBubbleStart(e, token));
        moveBubble.addEventListener('touchstart', (e) => this.onMoveBubbleTouchStart(e, token), { passive: false });

        // Menu bubble - click/tap to open menu
        menuBubble.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.showTokenContextMenu({
                preventDefault: () => {},
                stopPropagation: () => {},
                clientX: e.clientX,
                clientY: e.clientY
            }, token);
        });

        menuBubble.addEventListener('touchend', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const touch = e.changedTouches[0];
            this.showTokenContextMenu({
                preventDefault: () => {},
                stopPropagation: () => {},
                clientX: touch.clientX,
                clientY: touch.clientY
            }, token);
        });
    },

    updateBubblePositions(token) {
        const bubbles = document.getElementById('vtt-action-bubbles');
        if (!bubbles || !token) return;

        const tokenEl = document.querySelector(`[data-token-id="${token.id}"]`);
        if (!tokenEl) return;

        const tokenRect = tokenEl.getBoundingClientRect();
        const centerX = tokenRect.left + tokenRect.width / 2;
        const centerY = tokenRect.top + tokenRect.height / 2;

        // Position move bubble to the left
        const moveBubble = bubbles.querySelector('.vtt-action-move');
        if (moveBubble) {
            moveBubble.style.left = (tokenRect.left - 50) + 'px';
            moveBubble.style.top = (centerY - 20) + 'px';
        }

        // Position menu bubble to the right
        const menuBubble = bubbles.querySelector('.vtt-action-menu');
        if (menuBubble) {
            menuBubble.style.left = (tokenRect.right + 10) + 'px';
            menuBubble.style.top = (centerY - 20) + 'px';
        }
    },

    hideTokenActionBubbles() {
        const bubbles = document.getElementById('vtt-action-bubbles');
        if (bubbles) bubbles.remove();
    },

    onMoveBubbleStart(e, token) {
        e.preventDefault();
        e.stopPropagation();

        this.saveUndoState(`Move ${token.name}`);

        this.draggedToken = token;
        const rect = this.tokenLayer.getBoundingClientRect();

        // Calculate offset from click position to token position
        // This makes the token move relative to where you clicked on the bubble
        this.dragOffsetX = e.clientX - rect.left - token.x * this.scale;
        this.dragOffsetY = e.clientY - rect.top - token.y * this.scale;

        // Add global mouse listeners
        document.addEventListener('mousemove', this.boundBubbleDrag = (e) => this.onBubbleDrag(e, token));
        document.addEventListener('mouseup', this.boundBubbleDragEnd = (e) => this.onBubbleDragEnd(e, token));
    },

    onMoveBubbleTouchStart(e, token) {
        e.preventDefault();
        e.stopPropagation();

        this.saveUndoState(`Move ${token.name}`);

        const touch = e.touches[0];
        this.draggedToken = token;
        const tokenEl = document.querySelector(`[data-token-id="${token.id}"]`);
        if (!tokenEl) return;

        const tokenRect = tokenEl.getBoundingClientRect();
        const rect = this.tokenLayer.getBoundingClientRect();

        // Calculate offset from touch point to token position
        this.dragOffsetX = touch.clientX - rect.left - token.x * this.scale;
        this.dragOffsetY = touch.clientY - rect.top - token.y * this.scale;

        // Add global touch listeners
        document.addEventListener('touchmove', this.boundBubbleTouchDrag = (e) => this.onBubbleTouchDrag(e, token), { passive: false });
        document.addEventListener('touchend', this.boundBubbleTouchEnd = (e) => this.onBubbleTouchEnd(e, token));
    },

    onBubbleDrag(e, token) {
        if (!this.draggedToken) return;
        this.moveToken(e.clientX, e.clientY);
        this.updateBubblePositions(token);
    },

    onBubbleTouchDrag(e, token) {
        if (!this.draggedToken) return;
        e.preventDefault();
        const touch = e.touches[0];
        this.moveToken(touch.clientX, touch.clientY);
        this.updateBubblePositions(token);
    },

    onBubbleDragEnd(e, token) {
        document.removeEventListener('mousemove', this.boundBubbleDrag);
        document.removeEventListener('mouseup', this.boundBubbleDragEnd);
        this.dropToken();
        this.updateBubblePositions(token);
    },

    onBubbleTouchEnd(e, token) {
        document.removeEventListener('touchmove', this.boundBubbleTouchDrag);
        document.removeEventListener('touchend', this.boundBubbleTouchEnd);
        this.dropToken();
        this.updateBubblePositions(token);
    },

    /**
     * Fog of War
     */
    startFog(x, y) {
        this.saveUndoState('Add fog');
        this.isDrawing = true;
        this.drawStartX = x;
        this.drawStartY = y;
        this.addFogCell(x, y);
    },

    startErase(x, y) {
        this.saveUndoState('Erase fog');
        this.isDrawing = true;
        this.eraseFogCell(x, y);
    },

    continueFog(x, y) {
        if (this.currentTool === 'fog') {
            this.addFogCell(x, y);
        } else if (this.currentTool === 'eraser') {
            this.eraseFogCell(x, y);
        }
    },

    endFog() {
        this.isDrawing = false;
        this.saveState();
    },

    addFogCell(x, y) {
        // Convert to grid coordinates
        const gridX = Math.floor((x - this.offsetX) / (this.gridSize * this.scale));
        const gridY = Math.floor((y - this.offsetY) / (this.gridSize * this.scale));
        const key = `${gridX},${gridY}`;

        if (this.fogCells.includes(key)) return;

        this.fogCells.push(key);
        this.renderFog();
    },

    eraseFogCell(x, y) {
        const gridX = Math.floor((x - this.offsetX) / (this.gridSize * this.scale));
        const gridY = Math.floor((y - this.offsetY) / (this.gridSize * this.scale));
        const key = `${gridX},${gridY}`;

        const idx = this.fogCells.indexOf(key);
        if (idx >= 0) {
            this.fogCells.splice(idx, 1);
            this.renderFog();
        }
    },

    renderFog() {
        this.fogLayer.innerHTML = '';
        this.fogCells.forEach(key => {
            const [x, y] = key.split(',').map(Number);
            const cell = document.createElement('div');
            cell.className = 'vtt-fog-cell';
            cell.style.left = (x * this.gridSize) + 'px';
            cell.style.top = (y * this.gridSize) + 'px';
            cell.style.width = this.gridSize + 'px';
            cell.style.height = this.gridSize + 'px';
            this.fogLayer.appendChild(cell);
        });
    },

    /**
     * Ruler / Measure
     */
    startMeasure(x, y) {
        this.isDrawing = true;
        // Store screen coordinates directly
        this.drawStartX = x;
        this.drawStartY = y;

        document.getElementById('vtt-ruler-display').classList.remove('hidden');
    },

    updateMeasure(x, y) {
        const endX = x;
        const endY = y;

        // Calculate distance in world space for accurate measurement
        const worldDx = (endX - this.drawStartX) / this.scale;
        const worldDy = (endY - this.drawStartY) / this.scale;
        const pixelDist = Math.sqrt(worldDx * worldDx + worldDy * worldDy);
        const squares = pixelDist / this.gridSize;
        const feet = Math.round(squares * 5);

        document.getElementById('vtt-ruler-distance').textContent = feet + ' ft';

        // Draw line in screen coordinates
        this.measureLayer.innerHTML = `
            <line class="vtt-ruler-line" x1="${this.drawStartX}" y1="${this.drawStartY}" x2="${endX}" y2="${endY}"/>
            <circle class="vtt-ruler-endpoint" cx="${this.drawStartX}" cy="${this.drawStartY}" r="6"/>
            <circle class="vtt-ruler-endpoint" cx="${endX}" cy="${endY}" r="6"/>
        `;
    },

    endMeasure() {
        this.isDrawing = false;
        this.measureLayer.innerHTML = '';
        document.getElementById('vtt-ruler-display').classList.add('hidden');
    },

    /**
     * Initiative Tracker
     */
    renderInitiativeList() {
        const list = document.getElementById('vtt-initiative-list');
        if (!list) return;

        if (this.tokens.length === 0) {
            list.innerHTML = '<div class="vtt-empty-state">No tokens on map</div>';
            return;
        }

        // Build initiative list from tokens
        this.initiative = this.tokens.map(t => ({
            tokenId: t.id,
            name: t.name,
            roll: t.initiative || 0,
            type: t.type,
            color: t.color
        }));

        list.innerHTML = this.initiative.map((item, idx) => {
            const token = this.tokens.find(t => t.id === item.tokenId);
            const bgColor = token?.type === 'player' ? this.getPlayerColor(token.color) : '#8b2500';

            // Get icon for monsters, letter for players
            let tokenContent = item.name.charAt(0);
            if (token?.type === 'monster' && token.monster) {
                const iconHtml = this.getMonsterIcon(token.monster, 28);
                if (iconHtml) {
                    tokenContent = iconHtml;
                }
            }

            return `
                <div class="vtt-initiative-item ${idx === this.currentTurn ? 'active' : ''}">
                    <div class="vtt-init-token" style="background: ${bgColor}">${tokenContent}</div>
                    <span class="vtt-init-name">${item.name}</span>
                    <div class="vtt-init-roll">
                        <input type="number" value="${item.roll}" onchange="VTTManager.setInitiative('${item.tokenId}', this.value)">
                    </div>
                </div>
            `;
        }).join('');

        document.getElementById('vtt-round').textContent = this.round;
    },

    setInitiative(tokenId, value) {
        const token = this.tokens.find(t => t.id === tokenId);
        if (token) {
            token.initiative = parseInt(value) || 0;
            this.saveState();
        }
    },

    rollAllInitiative() {
        this.tokens.forEach(t => {
            t.initiative = Math.floor(Math.random() * 20) + 1;
        });
        this.sortInitiative();
        this.renderInitiativeList();
        this.saveState();
    },

    sortInitiative() {
        this.tokens.sort((a, b) => (b.initiative || 0) - (a.initiative || 0));
        this.currentTurn = 0;
        this.renderInitiativeList();
        this.renderTokens();
        this.saveState();
    },

    nextTurn() {
        this.currentTurn++;
        if (this.currentTurn >= this.tokens.length) {
            this.currentTurn = 0;
            this.round++;
        }
        this.renderInitiativeList();
        this.highlightCurrentToken();
    },

    prevTurn() {
        this.currentTurn--;
        if (this.currentTurn < 0) {
            this.currentTurn = this.tokens.length - 1;
            this.round = Math.max(1, this.round - 1);
        }
        this.renderInitiativeList();
        this.highlightCurrentToken();
    },

    highlightCurrentToken() {
        if (this.tokens[this.currentTurn]) {
            this.selectToken(this.tokens[this.currentTurn]);
        }
    },

    clearInitiative() {
        this.tokens.forEach(t => t.initiative = null);
        this.currentTurn = 0;
        this.round = 1;
        this.renderInitiativeList();
        this.saveState();
    },

    /**
     * Monster Library
     */
    loadMonsterLibrary() {
        try {
            const monsters = JSON.parse(localStorage.getItem('monsterLibrary')) || [];
            this.renderMonsterList(monsters);
        } catch (e) {}
    },

    filterMonsters(query) {
        try {
            const monsters = JSON.parse(localStorage.getItem('monsterLibrary')) || [];
            const filtered = monsters.filter(m => {
                const name = m.name || (m.data && m.data.name) || '';
                return name.toLowerCase().includes(query.toLowerCase());
            });
            this.renderMonsterList(filtered);
        } catch (e) {}
    },

    renderMonsterList(monsters) {
        const list = document.getElementById('vtt-monster-list');
        const favList = document.getElementById('vtt-monster-favorites-list');
        if (!list) return;

        if (monsters.length === 0) {
            list.innerHTML = '<div class="vtt-empty-state">No saved monsters</div>';
            favList.innerHTML = '<div class="vtt-empty-state">No favorites yet</div>';
            return;
        }

        const favMonsters = monsters.filter(m => this.favorites.includes(m.id));
        const otherMonsters = monsters.filter(m => !this.favorites.includes(m.id));

        favList.innerHTML = favMonsters.length > 0
            ? favMonsters.map(m => this.renderMonsterItem(m, true)).join('')
            : '<div class="vtt-empty-state">No favorites yet</div>';

        list.innerHTML = otherMonsters.map(m => this.renderMonsterItem(m, false)).join('');
    },

    renderMonsterItem(monster, isFav) {
        // Handle wrapper format {id, name, type, cr, data}
        const monsterData = monster.data || monster;
        const name = monsterData.name || monster.name || 'Unknown';
        const cr = monsterData.challengeRating || monsterData.cr || monster.cr || '?';
        // Store the unwrapped data for the token
        const tokenData = JSON.stringify(monsterData).replace(/"/g, '&quot;');
        return `
            <div class="vtt-monster-item" onclick="VTTManager.addMonsterToken(${tokenData})">
                <span class="vtt-monster-item-name">${name}</span>
                <span class="vtt-monster-item-cr">CR ${cr}</span>
                <button class="vtt-monster-item-fav ${isFav ? 'active' : ''}" onclick="event.stopPropagation(); VTTManager.toggleFavorite('${monster.id}')">
                    ${isFav ? '★' : '☆'}
                </button>
            </div>
        `;
    },

    toggleFavorite(monsterId) {
        const idx = this.favorites.indexOf(monsterId);
        if (idx >= 0) {
            this.favorites.splice(idx, 1);
        } else {
            this.favorites.push(monsterId);
        }
        this.saveFavorites();
        this.loadMonsterLibrary();
    },

    loadFavorites() {
        try {
            this.favorites = JSON.parse(localStorage.getItem('dmtk_vtt_favorites')) || [];
        } catch (e) {
            this.favorites = [];
        }
    },

    saveFavorites() {
        try {
            localStorage.setItem('dmtk_vtt_favorites', JSON.stringify(this.favorites));
        } catch (e) {}
    },

    /**
     * SRD Monster Browser
     */
    loadSRDMonsters() {
        // Get all SRD monsters from global arrays
        const allMonsters = [
            ...(window.SRDMonsters || []),
            ...(window.SRDMonsters2 || []),
            ...(window.SRDMonsters3 || []),
            ...(window.SRDMonsters4a || []),
            ...(window.SRDMonsters4b || []),
            ...(window.SRDMonsters5 || []),
            ...(window.SRDMonsters6a || [])
        ];
        return allMonsters;
    },

    filterSRDMonsters(searchQuery = null) {
        const search = searchQuery !== null ? searchQuery : (document.getElementById('vtt-srd-search')?.value || '');
        const typeFilter = document.getElementById('vtt-srd-type-filter')?.value || '';
        const crFilter = document.getElementById('vtt-srd-cr-filter')?.value || '';

        let monsters = this.loadSRDMonsters();

        // Apply search filter
        if (search) {
            const query = search.toLowerCase();
            monsters = monsters.filter(m => m.name.toLowerCase().includes(query));
        }

        // Apply type filter
        if (typeFilter) {
            monsters = monsters.filter(m => m.type.toLowerCase() === typeFilter);
        }

        // Apply CR filter
        if (crFilter) {
            monsters = monsters.filter(m => {
                const cr = this.parseCR(m.cr);
                switch (crFilter) {
                    case '0-1': return cr <= 1;
                    case '2-4': return cr >= 2 && cr <= 4;
                    case '5-10': return cr >= 5 && cr <= 10;
                    case '11-16': return cr >= 11 && cr <= 16;
                    case '17+': return cr >= 17;
                    default: return true;
                }
            });
        }

        this.renderSRDMonsterList(monsters);
    },

    parseCR(cr) {
        if (typeof cr === 'number') return cr;
        if (cr === '1/8') return 0.125;
        if (cr === '1/4') return 0.25;
        if (cr === '1/2') return 0.5;
        return parseFloat(cr) || 0;
    },

    formatCR(cr) {
        if (cr === 0.125 || cr === '0.125') return '1/8';
        if (cr === 0.25 || cr === '0.25') return '1/4';
        if (cr === 0.5 || cr === '0.5') return '1/2';
        return cr;
    },

    renderSRDMonsterList(monsters) {
        const list = document.getElementById('vtt-srd-monster-list');
        if (!list) return;

        if (!monsters || monsters.length === 0) {
            list.innerHTML = '<div class="vtt-empty-state">No SRD monsters found</div>';
            return;
        }

        // Sort alphabetically
        monsters.sort((a, b) => a.name.localeCompare(b.name));

        // Limit to first 100 for performance
        const display = monsters.slice(0, 100);

        list.innerHTML = display.map(m => {
            const cr = this.formatCR(m.cr);
            return `
                <div class="vtt-monster-item" onclick="VTTManager.addSRDMonsterToken('${m.name.replace(/'/g, "\\'")}')">
                    <span class="vtt-monster-item-name">${m.name}</span>
                    <span class="vtt-monster-item-cr">CR ${cr}</span>
                </div>
            `;
        }).join('');

        if (monsters.length > 100) {
            list.innerHTML += `<div class="vtt-empty-state" style="font-size: 0.75rem; padding: 0.5rem;">Showing 100 of ${monsters.length} results. Refine your search.</div>`;
        }
    },

    addSRDMonsterToken(monsterName) {
        const monsters = this.loadSRDMonsters();
        const monster = monsters.find(m => m.name === monsterName);
        if (!monster) return;

        // Use the new addToken method which handles SRD format
        this.addToken({
            id: 'srd-token-' + Date.now(),
            name: monster.name,
            hp: monster.hp,
            maxHp: monster.hp,
            ac: monster.ac,
            type: 'monster',
            color: '#8b0000',
            monster: monster
        });

        // Show notification
        if (typeof showNotification === 'function') {
            showNotification(`Added ${monster.name} to map`, 'success');
        }
    },

    /**
     * Saved Token Templates
     */
    loadSavedTokens() {
        try {
            this.savedTokens = JSON.parse(localStorage.getItem('dmtk_vtt_saved_tokens')) || [];
        } catch (e) {
            this.savedTokens = [];
        }
        this.renderSavedTokens();
    },

    saveSavedTokens() {
        try {
            localStorage.setItem('dmtk_vtt_saved_tokens', JSON.stringify(this.savedTokens));
        } catch (e) {
            console.error('Failed to save tokens:', e);
            if (typeof showNotification === 'function') {
                if (e.name === 'QuotaExceededError') {
                    showNotification('Storage full! Try removing some saved tokens.', 'error');
                } else {
                    showNotification('Failed to save token templates', 'error');
                }
            }
        }
    },

    saveTokenAsTemplate(tokenId) {
        const token = this.tokens.find(t => t.id === tokenId);
        if (!token) return;

        const template = {
            id: 'template_' + Date.now(),
            name: token.name,
            type: token.type,
            color: token.color || 'blue',
            customImage: token.customImage,
            maxHP: token.maxHP,
            ac: token.ac,
            sizeMultiplier: token.sizeMultiplier || 1,
            savedAt: new Date().toISOString()
        };

        this.savedTokens.push(template);
        this.saveSavedTokens();
        this.renderSavedTokens();
        this.closeContextMenu();

        if (typeof showNotification === 'function') {
            showNotification(`Saved "${token.name}" as template`, 'success');
        }
    },

    deleteSavedToken(templateId) {
        if (!confirm('Delete this saved token?')) return;

        this.savedTokens = this.savedTokens.filter(t => t.id !== templateId);
        this.saveSavedTokens();
        this.renderSavedTokens();
    },

    addSavedToken(templateId) {
        const template = this.savedTokens.find(t => t.id === templateId);
        if (!template) return;

        // Calculate snap position at center of viewport
        const centerX = (this.canvas.offsetWidth / 2 - this.offsetX) / this.scale;
        const centerY = (this.canvas.offsetHeight / 2 - this.offsetY) / this.scale;
        const snappedX = Math.round(centerX / this.gridSize) * this.gridSize;
        const snappedY = Math.round(centerY / this.gridSize) * this.gridSize;

        const token = {
            id: 'token_' + Date.now(),
            type: template.type || 'player',
            color: template.color || 'blue',
            name: template.name,
            x: snappedX,
            y: snappedY,
            sizeMultiplier: template.sizeMultiplier || 1,
            maxHP: template.maxHP,
            currentHP: template.maxHP,
            ac: template.ac,
            customImage: template.customImage,
            conditions: [],
            initiative: null
        };

        this.tokens.push(token);
        this.renderTokens();
        this.saveState();
    },

    renderSavedTokens() {
        const container = document.getElementById('vtt-saved-tokens-list');
        if (!container) return;

        if (this.savedTokens.length === 0) {
            container.innerHTML = '<div class="vtt-empty-state">No saved tokens yet.<br>Right-click a token to save it.</div>';
            return;
        }

        container.innerHTML = this.savedTokens.map(template => {
            let previewContent = template.name.charAt(0);
            // Try to get monster type icon
            if (template.monster) {
                const iconHtml = this.getMonsterIcon(template.monster, 32);
                if (iconHtml) previewContent = iconHtml;
            }
            const preview = template.customImage
                ? `<div class="vtt-saved-token-preview" style="background-image: url(${template.customImage}); background-size: cover;"></div>`
                : `<div class="vtt-saved-token-preview ${template.color || 'blue'}">${previewContent}</div>`;

            return `
                <div class="vtt-saved-token-item" onclick="VTTManager.addSavedToken('${template.id}')">
                    ${preview}
                    <div class="vtt-saved-token-info">
                        <div class="vtt-saved-token-name">${template.name}</div>
                        <div class="vtt-saved-token-meta">${template.maxHP ? 'HP: ' + template.maxHP : ''} ${template.ac ? 'AC: ' + template.ac : ''}</div>
                    </div>
                    <button class="vtt-saved-token-delete" onclick="event.stopPropagation(); VTTManager.deleteSavedToken('${template.id}')" title="Delete">×</button>
                </div>
            `;
        }).join('');
    },

    /**
     * Map Management
     */
    loadMaps() {
        try {
            this.maps = JSON.parse(localStorage.getItem('dmtk_vtt_maps')) || [];

            const lastMapId = localStorage.getItem('dmtk_vtt_active');
            if (lastMapId) {
                const map = this.maps.find(m => m.id === lastMapId);
                if (map) {
                    this.loadMap(map.id);
                    this.updateMapsList();
                    return;
                }
            }

            if (this.maps.length === 0) {
                this.createMap('Default Battlemap');
            } else {
                this.loadMap(this.maps[0].id);
            }
            this.updateMapsList();
        } catch (e) {
            console.error('Failed to load maps:', e);
            this.maps = [];
            this.createMap('Default Battlemap');
        }
    },

    createMap(name) {
        const map = {
            id: 'map_' + Date.now(),
            name: name,
            tokens: [],
            fogCells: [],
            gridSize: 50,
            gridOpacity: 0.3,
            background: null,
            round: 1,
            currentTurn: 0
        };

        this.maps.push(map);
        this.loadMap(map.id);
        this.saveMaps();
        this.updateMapsList();
    },

    loadMap(mapId) {
        const map = this.maps.find(m => m.id === mapId);
        if (!map) return;

        this.currentMap = map;
        this.tokens = map.tokens || [];
        this.fogCells = map.fogCells || [];
        this.gridSize = map.gridSize || 50;
        this.gridOpacity = map.gridOpacity || 0.3;
        this.round = map.round || 1;
        this.currentTurn = map.currentTurn || 0;

        // Update UI
        document.getElementById('vtt-grid-size').value = this.gridSize;
        document.getElementById('vtt-grid-size-value').textContent = this.gridSize + 'px';
        document.getElementById('vtt-grid-opacity').value = this.gridOpacity * 100;
        document.getElementById('vtt-grid-opacity-value').textContent = Math.round(this.gridOpacity * 100) + '%';

        this.gridLayer.style.opacity = this.gridOpacity;
        this.updateGrid();

        if (map.background) {
            this.backgroundLayer.style.backgroundImage = `url(${map.background})`;
            // Restore map position and size
            this.mapX = map.mapX || 0;
            this.mapY = map.mapY || 0;
            this.mapWidth = map.mapWidth || 0;
            this.mapHeight = map.mapHeight || 0;

            // If we have saved dimensions, apply them
            if (this.mapWidth > 0 && this.mapHeight > 0) {
                this.applyMapTransform();
                // Always update map controls when we have dimensions
                this.updateMapControls();
            } else {
                // Otherwise detect from image
                const img = new Image();
                img.onload = () => {
                    const canvasRect = this.canvas.getBoundingClientRect();
                    const scale = Math.min(
                        canvasRect.width / img.naturalWidth,
                        canvasRect.height / img.naturalHeight,
                        1
                    );
                    this.mapWidth = Math.round(img.naturalWidth * scale);
                    this.mapHeight = Math.round(img.naturalHeight * scale);
                    this.applyMapTransform();
                    this.updateMapControls();
                };
                img.src = map.background;
            }
        } else {
            this.backgroundLayer.style.backgroundImage = 'none';
            this.mapX = 0;
            this.mapY = 0;
            this.mapWidth = 0;
            this.mapHeight = 0;
        }

        this.renderTokens();
        this.renderFog();

        // Update map controls if active
        if (this.currentTool === 'map') {
            this.updateMapControls();
        }

        localStorage.setItem('dmtk_vtt_active', mapId);
    },

    saveState() {
        if (!this.currentMap) return;

        this.currentMap.tokens = this.tokens;
        this.currentMap.fogCells = this.fogCells;
        this.currentMap.gridSize = this.gridSize;
        this.currentMap.gridOpacity = this.gridOpacity;
        this.currentMap.round = this.round;
        this.currentMap.currentTurn = this.currentTurn;

        this.saveMaps();
    },

    /**
     * Undo system - save state before making changes
     */
    saveUndoState(action = 'change') {
        if (!this.currentMap) return;

        const state = {
            action: action,
            timestamp: Date.now(),
            tokens: JSON.parse(JSON.stringify(this.tokens)),
            fogCells: JSON.parse(JSON.stringify(this.fogCells)),
            mapX: this.mapX,
            mapY: this.mapY,
            mapWidth: this.mapWidth,
            mapHeight: this.mapHeight,
            initiative: JSON.parse(JSON.stringify(this.initiative)),
            round: this.round,
            currentTurn: this.currentTurn
        };

        this.undoHistory.push(state);

        // Limit history size
        if (this.undoHistory.length > this.maxUndoHistory) {
            this.undoHistory.shift();
        }

        this.updateUndoButton();
    },

    undo() {
        if (this.undoHistory.length === 0) return;

        const state = this.undoHistory.pop();

        // Restore state
        this.tokens = state.tokens;
        this.fogCells = state.fogCells;
        this.mapX = state.mapX;
        this.mapY = state.mapY;
        this.mapWidth = state.mapWidth;
        this.mapHeight = state.mapHeight;
        this.initiative = state.initiative;
        this.round = state.round;
        this.currentTurn = state.currentTurn;

        // Apply map transform
        if (this.mapWidth > 0 && this.mapHeight > 0) {
            this.applyMapTransform();
        }

        // Re-render everything
        this.renderTokens();
        this.renderFog();
        this.renderInitiative();

        // Update map controls if active
        if (this.currentTool === 'map') {
            this.updateMapControls();
        }

        // Save changes
        this.saveState();

        this.updateUndoButton();

        // Show notification
        if (typeof showNotification === 'function') {
            showNotification(`Undid: ${state.action}`, 'info');
        }
    },

    updateUndoButton() {
        const undoBtn = document.getElementById('vtt-undo-btn');
        if (undoBtn) {
            undoBtn.disabled = this.undoHistory.length === 0;
            undoBtn.title = this.undoHistory.length > 0
                ? `Undo (${this.undoHistory.length} actions)`
                : 'Nothing to undo';
        }
    },

    saveMaps() {
        try {
            const data = JSON.stringify(this.maps);
            localStorage.setItem('dmtk_vtt_maps', data);
        } catch (e) {
            console.error('Failed to save maps:', e);
            // Notify user of save failure
            if (typeof showNotification === 'function') {
                if (e.name === 'QuotaExceededError') {
                    showNotification('Storage full! Try removing some token images.', 'error');
                } else {
                    showNotification('Failed to save map data', 'error');
                }
            } else {
                alert('Failed to save: ' + (e.name === 'QuotaExceededError' ? 'Storage full!' : e.message));
            }
        }
    },

    updateMapsList() {
        const select = document.getElementById('vtt-map-select');
        if (!select) return;

        select.innerHTML = this.maps.map(m =>
            `<option value="${m.id}" ${this.currentMap && m.id === this.currentMap.id ? 'selected' : ''}>${m.name}</option>`
        ).join('');
    },

    renameMap() {
        if (!this.currentMap) return;
        const name = prompt('Map name:', this.currentMap.name);
        if (name) {
            this.currentMap.name = name;
            this.saveMaps();
            this.updateMapsList();
        }
    },

    deleteMap() {
        if (!this.currentMap) return;
        if (this.maps.length <= 1) {
            alert('Cannot delete the last map.');
            return;
        }
        if (!confirm(`Delete "${this.currentMap.name}"?`)) return;

        this.maps = this.maps.filter(m => m.id !== this.currentMap.id);
        this.saveMaps();
        this.loadMap(this.maps[0].id);
        this.updateMapsList();
    },

    exportMap() {
        if (!this.currentMap) return;

        const data = JSON.stringify(this.currentMap, null, 2);
        const blob = new Blob([data], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = `${this.currentMap.name.replace(/[^a-z0-9]/gi, '_')}.json`;
        a.click();

        URL.revokeObjectURL(url);
    },

    importMap(file) {
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const map = JSON.parse(e.target.result);
                map.id = 'map_' + Date.now();
                map.name = map.name + ' (Imported)';

                this.maps.push(map);
                this.saveMaps();
                this.loadMap(map.id);
                this.updateMapsList();
            } catch (e) {
                alert('Failed to import map: Invalid JSON');
            }
        };
        reader.readAsText(file);
    },

    /**
     * Dice Roller
     */
    toggleDiceRoller() {
        const panel = document.getElementById('vtt-dice-panel');
        if (panel) {
            panel.classList.toggle('open');
        }
    },

    selectDie(die) {
        this.currentDie = die;
        this.updateDiceDisplay();

        // Update button states
        document.querySelectorAll('.vtt-dice-btn').forEach(btn => {
            btn.classList.toggle('active', parseInt(btn.dataset.die) === die);
        });
    },

    changeDiceCount(delta) {
        this.diceCount = Math.max(1, Math.min(20, this.diceCount + delta));
        this.updateDiceDisplay();
    },

    updateDiceDisplay() {
        const display = document.getElementById('vtt-dice-count-display');
        if (display) {
            display.textContent = `${this.diceCount}d${this.currentDie}`;
        }
    },

    rollDice() {
        const rolls = [];
        let total = 0;

        for (let i = 0; i < this.diceCount; i++) {
            const roll = Math.floor(Math.random() * this.currentDie) + 1;
            rolls.push(roll);
            total += roll;
        }

        // Display result
        const resultEl = document.getElementById('vtt-roll-result');
        const totalEl = document.getElementById('vtt-roll-total');
        const breakdownEl = document.getElementById('vtt-roll-breakdown');

        if (resultEl && totalEl && breakdownEl) {
            totalEl.textContent = total;

            // Highlight nat 20 or nat 1 on single d20
            if (this.currentDie === 20 && this.diceCount === 1) {
                if (total === 20) {
                    totalEl.style.color = '#5cb85c';
                    breakdownEl.textContent = 'Natural 20!';
                } else if (total === 1) {
                    totalEl.style.color = '#d9534f';
                    breakdownEl.textContent = 'Natural 1...';
                } else {
                    totalEl.style.color = '#c9a227';
                    breakdownEl.textContent = `[${rolls.join(', ')}]`;
                }
            } else {
                totalEl.style.color = '#c9a227';
                breakdownEl.textContent = `[${rolls.join(', ')}]`;
            }

            resultEl.classList.add('show');
        }
    }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    VTTManager.init();
});
