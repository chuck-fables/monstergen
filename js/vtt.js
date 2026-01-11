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
        this.bindEvents();
        this.updateGrid();
        this.loadMonsterLibrary();
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

        // Close context menu on click elsewhere
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.vtt-context-menu')) {
                this.closeContextMenu();
            }
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => this.onKeyDown(e));
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
            this.selectedToken = null;
            this.closeContextMenu();
            this.renderTokens();
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
        this.measureLayer.style.transform = transform;

        document.getElementById('vtt-zoom-level').textContent = Math.round(this.scale * 100) + '%';
    },

    /**
     * Grid controls
     */
    updateGridSize(value) {
        this.gridSize = parseInt(value);
        document.getElementById('vtt-grid-size-value').textContent = value + 'px';
        this.updateGrid();
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
            this.backgroundLayer.style.backgroundImage = `url(${e.target.result})`;
            this.backgroundLayer.style.backgroundSize = 'contain';
            if (this.currentMap) {
                this.currentMap.background = e.target.result;
                this.saveMaps();
            }
        };
        reader.readAsDataURL(file);
    },

    clearBackground() {
        this.backgroundLayer.style.backgroundImage = 'none';
        if (this.currentMap) {
            this.currentMap.background = null;
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

        // Update cursor
        if (tool === 'fog' || tool === 'eraser') {
            this.canvas.style.cursor = 'crosshair';
        } else if (tool === 'ruler') {
            this.canvas.style.cursor = 'crosshair';
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

        const token = {
            id: 'token_' + Date.now(),
            type: 'player',
            color: color,
            name: name,
            x: this.canvas.offsetWidth / 2 - this.offsetX / this.scale,
            y: this.canvas.offsetHeight / 2 - this.offsetY / this.scale,
            size: this.gridSize,
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
    addMonsterToken(monster) {
        const hp = monster.hitPoints?.average || monster.hp?.average || 10;
        const ac = monster.armorClass?.value || monster.ac?.value || 10;

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

        const token = {
            id: 'token_' + Date.now(),
            type: 'monster',
            monsterId: monster.id,
            name: monster.name,
            x: this.canvas.offsetWidth / 2 - this.offsetX / this.scale,
            y: this.canvas.offsetHeight / 2 - this.offsetY / this.scale,
            size: this.gridSize * sizeMultiplier,
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
            const el = document.createElement('div');
            el.className = `vtt-token ${token.type}${this.selectedToken?.id === token.id ? ' selected' : ''}`;
            el.dataset.tokenId = token.id;
            el.style.left = token.x + 'px';
            el.style.top = token.y + 'px';
            el.style.width = token.size + 'px';
            el.style.height = token.size + 'px';

            if (token.type === 'player') {
                // Player token with custom image or color
                if (token.customImage) {
                    el.style.backgroundImage = `url(${token.customImage})`;
                    el.style.backgroundSize = 'cover';
                    el.style.backgroundPosition = 'center';
                } else {
                    el.style.backgroundColor = this.getPlayerColor(token.color);
                }
                el.innerHTML = `<span style="font-size: ${token.size * 0.3}px; color: white; text-shadow: 0 1px 2px rgba(0,0,0,0.5);">${token.name.charAt(0)}</span>`;
            }

            // Token content for monsters
            if (token.type === 'monster') {
                if (token.customImage) {
                    el.style.backgroundImage = `url(${token.customImage})`;
                    el.style.backgroundSize = 'cover';
                    el.style.backgroundPosition = 'center';
                }
                el.innerHTML = `<span style="font-size: ${token.size * 0.3}px; color: white; text-shadow: 0 1px 2px rgba(0,0,0,0.5);">${token.name.charAt(0)}</span>`;
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

            // Events
            el.addEventListener('mousedown', (e) => this.onTokenMouseDown(e, token));
            el.addEventListener('touchstart', (e) => this.onTokenTouchStart(e, token), { passive: false });
            el.addEventListener('contextmenu', (e) => this.showTokenContextMenu(e, token));
            el.addEventListener('click', (e) => {
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
        this.selectedToken = token;
        this.renderTokens();
    },

    /**
     * Token dragging
     */
    onTokenMouseDown(e, token) {
        if (e.button !== 0) return;
        e.stopPropagation();

        this.draggedToken = token;
        const rect = this.tokenLayer.getBoundingClientRect();
        this.dragOffsetX = e.clientX - rect.left - token.x * this.scale;
        this.dragOffsetY = e.clientY - rect.top - token.y * this.scale;

        this.selectToken(token);
    },

    onTokenTouchStart(e, token) {
        e.preventDefault();
        e.stopPropagation();

        const touch = e.touches[0];
        this.draggedToken = token;
        const rect = this.tokenLayer.getBoundingClientRect();
        this.dragOffsetX = touch.clientX - rect.left - token.x * this.scale;
        this.dragOffsetY = touch.clientY - rect.top - token.y * this.scale;

        this.selectToken(token);
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
        `;

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
            <div class="vtt-context-menu-item" onclick="VTTManager.setTokenSize('${token.id}')">Change Size</div>
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

    editTokenHP(tokenId) {
        const token = this.tokens.find(t => t.id === tokenId);
        if (!token) return;

        const maxHP = prompt('Max HP:', token.maxHP || '');
        if (maxHP !== null) {
            token.maxHP = parseInt(maxHP) || null;
            if (token.maxHP) {
                const currentHP = prompt('Current HP:', token.currentHP || token.maxHP);
                token.currentHP = Math.max(0, parseInt(currentHP) || token.maxHP);
            } else {
                token.currentHP = null;
            }
            this.renderTokens();
            this.saveState();
        }
        this.closeContextMenu();
    },

    editTokenAC(tokenId) {
        const token = this.tokens.find(t => t.id === tokenId);
        if (!token) return;

        const ac = prompt('AC:', token.ac || '');
        if (ac !== null) {
            token.ac = parseInt(ac) || null;
            this.renderTokens();
            this.saveState();
        }
        this.closeContextMenu();
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
                const reader = new FileReader();
                reader.onload = (ev) => {
                    token.customImage = ev.target.result;
                    this.renderTokens();
                    this.saveState();
                };
                reader.readAsDataURL(file);
            }
        };
        input.click();
        this.closeContextMenu();
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

    setTokenSize(tokenId) {
        const token = this.tokens.find(t => t.id === tokenId);
        if (!token) return;

        const sizes = {
            'Tiny': 0.5,
            'Small': 1,
            'Medium': 1,
            'Large': 2,
            'Huge': 3,
            'Gargantuan': 4
        };

        const size = prompt('Size (Tiny, Small, Medium, Large, Huge, Gargantuan):', 'Medium');
        if (size && sizes[size]) {
            token.size = this.gridSize * sizes[size];
            this.renderTokens();
            this.saveState();
        }
        this.closeContextMenu();
    },

    removeToken(tokenId) {
        this.tokens = this.tokens.filter(t => t.id !== tokenId);
        if (this.selectedToken?.id === tokenId) {
            this.selectedToken = null;
        }
        this.renderTokens();
        this.renderInitiativeList();
        this.saveState();
        this.closeContextMenu();
    },

    /**
     * Fog of War
     */
    startFog(x, y) {
        this.isDrawing = true;
        this.drawStartX = x;
        this.drawStartY = y;
        this.addFogCell(x, y);
    },

    startErase(x, y) {
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
        this.drawStartX = (x - this.offsetX) / this.scale;
        this.drawStartY = (y - this.offsetY) / this.scale;

        document.getElementById('vtt-ruler-display').classList.remove('hidden');
    },

    updateMeasure(x, y) {
        const endX = (x - this.offsetX) / this.scale;
        const endY = (y - this.offsetY) / this.scale;

        // Calculate distance
        const dx = endX - this.drawStartX;
        const dy = endY - this.drawStartY;
        const pixelDist = Math.sqrt(dx * dx + dy * dy);
        const squares = pixelDist / this.gridSize;
        const feet = Math.round(squares * 5);

        document.getElementById('vtt-ruler-distance').textContent = feet + ' ft';

        // Draw line
        this.measureLayer.innerHTML = `
            <line class="vtt-ruler-line" x1="${this.drawStartX}" y1="${this.drawStartY}" x2="${endX}" y2="${endY}"/>
            <circle class="vtt-ruler-endpoint" cx="${this.drawStartX}" cy="${this.drawStartY}" r="5"/>
            <circle class="vtt-ruler-endpoint" cx="${endX}" cy="${endY}" r="5"/>
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

            return `
                <div class="vtt-initiative-item ${idx === this.currentTurn ? 'active' : ''}">
                    <div class="vtt-init-token" style="background: ${bgColor}">${item.name.charAt(0)}</div>
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
            const monsters = JSON.parse(localStorage.getItem('dmtk_monsters')) || [];
            this.renderMonsterList(monsters);
        } catch (e) {}
    },

    filterMonsters(query) {
        try {
            const monsters = JSON.parse(localStorage.getItem('dmtk_monsters')) || [];
            const filtered = monsters.filter(m =>
                m.name.toLowerCase().includes(query.toLowerCase())
            );
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
        const cr = monster.challengeRating || monster.cr || '?';
        return `
            <div class="vtt-monster-item" onclick="VTTManager.addMonsterToken(${JSON.stringify(monster).replace(/"/g, '&quot;')})">
                <span class="vtt-monster-item-name">${monster.name}</span>
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
        } else {
            this.backgroundLayer.style.backgroundImage = 'none';
        }

        this.renderTokens();
        this.renderFog();

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

    saveMaps() {
        try {
            localStorage.setItem('dmtk_vtt_maps', JSON.stringify(this.maps));
        } catch (e) {
            console.error('Failed to save maps:', e);
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
    }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    VTTManager.init();
});
