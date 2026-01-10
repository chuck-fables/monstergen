/**
 * Canvas Connections Module
 * Handles drawing and managing connection lines between cards
 */

const CanvasConnections = {
    // Drawing state
    isDrawing: false,
    drawingFromCard: null,
    drawingFromSide: null,
    tempLine: null,

    // Connection colors
    colors: [
        { id: 'default', color: '#666', label: 'Gray' },
        { id: 'red', color: '#c0392b', label: 'Red' },
        { id: 'blue', color: '#2980b9', label: 'Blue' },
        { id: 'green', color: '#27ae60', label: 'Green' },
        { id: 'orange', color: '#d35400', label: 'Orange' },
        { id: 'purple', color: '#8e44ad', label: 'Purple' }
    ],

    // Line styles
    styles: [
        { id: 'solid', label: 'Solid', dashArray: '' },
        { id: 'dashed', label: 'Dashed', dashArray: '8,4' },
        { id: 'dotted', label: 'Dotted', dashArray: '2,4' }
    ],

    /**
     * Start drawing a connection from a card
     */
    startDrawing(cardId) {
        this.isDrawing = true;
        this.drawingFromCard = cardId;
        this.drawingFromSide = null;

        // Highlight the source card
        const el = document.querySelector(`[data-canvas-id="${cardId}"]`);
        if (el) el.classList.add('connecting');

        // Create temp line
        this.createTempLine();

        // Add click listener for target cards
        document.addEventListener('click', this.onDrawingClick);
    },

    /**
     * Start drawing from a specific connector
     */
    startDrawingFromConnector(cardId, side, e) {
        e.stopPropagation();
        this.isDrawing = true;
        this.drawingFromCard = cardId;
        this.drawingFromSide = side;

        const el = document.querySelector(`[data-canvas-id="${cardId}"]`);
        if (el) el.classList.add('connecting');

        this.createTempLine();

        // Update temp line to start from connector
        const startPos = CanvasCards.getConnectorPosition(cardId, side);
        if (startPos && this.tempLine) {
            this.tempLine.setAttribute('x1', startPos.x);
            this.tempLine.setAttribute('y1', startPos.y);
        }
    },

    /**
     * Create temporary line for drawing
     */
    createTempLine() {
        const svg = CampaignCanvas.svgLayer;
        if (!svg) return;

        this.tempLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        this.tempLine.setAttribute('class', 'connection-temp');
        this.tempLine.setAttribute('stroke', '#999');
        this.tempLine.setAttribute('stroke-width', '2');
        this.tempLine.setAttribute('stroke-dasharray', '5,5');

        const startPos = CanvasCards.getCardCenter(this.drawingFromCard);
        if (startPos) {
            this.tempLine.setAttribute('x1', startPos.x);
            this.tempLine.setAttribute('y1', startPos.y);
            this.tempLine.setAttribute('x2', startPos.x);
            this.tempLine.setAttribute('y2', startPos.y);
        }

        svg.appendChild(this.tempLine);
    },

    /**
     * Update temporary line during drawing
     */
    updateDrawing(e) {
        if (!this.isDrawing || !this.tempLine) return;

        const pos = CampaignCanvas.screenToCanvas(e.clientX, e.clientY);
        this.tempLine.setAttribute('x2', pos.x);
        this.tempLine.setAttribute('y2', pos.y);
    },

    /**
     * Handle click while drawing
     */
    onDrawingClick: function(e) {
        // Find if we clicked on a card
        const cardEl = e.target.closest('.canvas-card');

        if (cardEl && cardEl.dataset.canvasId !== CanvasConnections.drawingFromCard) {
            // Connect to this card
            const targetId = cardEl.dataset.canvasId;
            const targetSide = e.target.closest('.connector')?.dataset.side || null;

            CanvasConnections.createConnection(
                CanvasConnections.drawingFromCard,
                targetId,
                CanvasConnections.drawingFromSide,
                targetSide
            );
        }

        CanvasConnections.cancelDrawing();
        document.removeEventListener('click', CanvasConnections.onDrawingClick);
    },

    /**
     * Cancel drawing
     */
    cancelDrawing() {
        this.isDrawing = false;

        // Remove highlight
        const el = document.querySelector(`[data-canvas-id="${this.drawingFromCard}"]`);
        if (el) el.classList.remove('connecting');

        this.drawingFromCard = null;
        this.drawingFromSide = null;

        // Remove temp line
        if (this.tempLine) {
            this.tempLine.remove();
            this.tempLine = null;
        }
    },

    /**
     * Create a connection between two cards
     */
    createConnection(fromCardId, toCardId, fromSide = null, toSide = null, label = '') {
        if (!CampaignCanvas.currentBoard) return;

        // Check if connection already exists
        const existing = CampaignCanvas.currentBoard.connections.find(c =>
            (c.from === fromCardId && c.to === toCardId) ||
            (c.from === toCardId && c.to === fromCardId)
        );

        if (existing) {
            this.showNotification('Connection already exists');
            return;
        }

        const connection = {
            id: 'conn_' + Date.now(),
            from: fromCardId,
            to: toCardId,
            fromSide: fromSide,
            toSide: toSide,
            label: label,
            color: 'default',
            style: 'solid'
        };

        CampaignCanvas.currentBoard.connections.push(connection);
        this.renderConnection(connection);
        CampaignCanvas.saveState();

        // Prompt for label
        setTimeout(() => this.editConnectionLabel(connection.id), 100);

        return connection;
    },

    /**
     * Render a connection line
     */
    renderConnection(connection) {
        const svg = CampaignCanvas.svgLayer;
        if (!svg) return;

        const fromPos = connection.fromSide
            ? CanvasCards.getConnectorPosition(connection.from, connection.fromSide)
            : CanvasCards.getCardCenter(connection.from);

        const toPos = connection.toSide
            ? CanvasCards.getConnectorPosition(connection.to, connection.toSide)
            : CanvasCards.getCardCenter(connection.to);

        if (!fromPos || !toPos) return;

        // Create group for line and label
        const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        group.setAttribute('class', 'connection-group');
        group.dataset.connectionId = connection.id;

        // Get color and style
        const colorConfig = this.colors.find(c => c.id === connection.color) || this.colors[0];
        const styleConfig = this.styles.find(s => s.id === connection.style) || this.styles[0];

        // Create line
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('class', 'connection-line');
        line.setAttribute('x1', fromPos.x);
        line.setAttribute('y1', fromPos.y);
        line.setAttribute('x2', toPos.x);
        line.setAttribute('y2', toPos.y);
        line.setAttribute('stroke', colorConfig.color);
        line.setAttribute('stroke-width', '2');
        if (styleConfig.dashArray) {
            line.setAttribute('stroke-dasharray', styleConfig.dashArray);
        }

        // Create hit area for easier clicking
        const hitArea = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        hitArea.setAttribute('class', 'connection-hit-area');
        hitArea.setAttribute('x1', fromPos.x);
        hitArea.setAttribute('y1', fromPos.y);
        hitArea.setAttribute('x2', toPos.x);
        hitArea.setAttribute('y2', toPos.y);
        hitArea.setAttribute('stroke', 'transparent');
        hitArea.setAttribute('stroke-width', '20');

        // Create arrowhead
        const arrow = this.createArrowhead(fromPos, toPos, colorConfig.color);

        // Create label if exists
        let labelEl = null;
        if (connection.label) {
            const midX = (fromPos.x + toPos.x) / 2;
            const midY = (fromPos.y + toPos.y) / 2;

            // Background rect for label
            const labelBg = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            labelBg.setAttribute('class', 'connection-label-bg');

            labelEl = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            labelEl.setAttribute('class', 'connection-label');
            labelEl.setAttribute('x', midX);
            labelEl.setAttribute('y', midY);
            labelEl.setAttribute('text-anchor', 'middle');
            labelEl.setAttribute('dominant-baseline', 'middle');
            labelEl.textContent = connection.label;

            group.appendChild(labelBg);
            group.appendChild(labelEl);

            // Position background after text is rendered
            setTimeout(() => {
                const bbox = labelEl.getBBox();
                labelBg.setAttribute('x', bbox.x - 4);
                labelBg.setAttribute('y', bbox.y - 2);
                labelBg.setAttribute('width', bbox.width + 8);
                labelBg.setAttribute('height', bbox.height + 4);
            }, 0);
        }

        group.appendChild(hitArea);
        group.appendChild(line);
        group.appendChild(arrow);

        // Click handler
        group.addEventListener('click', (e) => {
            e.stopPropagation();
            this.selectConnection(connection.id);
        });

        // Double-click to edit label
        group.addEventListener('dblclick', (e) => {
            e.stopPropagation();
            this.editConnectionLabel(connection.id);
        });

        svg.appendChild(group);
    },

    /**
     * Create arrowhead for connection
     */
    createArrowhead(from, to, color) {
        const arrow = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');

        // Calculate angle
        const dx = to.x - from.x;
        const dy = to.y - from.y;
        const angle = Math.atan2(dy, dx);

        // Arrow dimensions
        const arrowLength = 12;
        const arrowWidth = 8;

        // Position arrow slightly before the end point
        const endX = to.x - Math.cos(angle) * 20;
        const endY = to.y - Math.sin(angle) * 20;

        // Calculate arrow points
        const tipX = endX;
        const tipY = endY;
        const baseX1 = endX - arrowLength * Math.cos(angle) + arrowWidth * Math.sin(angle);
        const baseY1 = endY - arrowLength * Math.sin(angle) - arrowWidth * Math.cos(angle);
        const baseX2 = endX - arrowLength * Math.cos(angle) - arrowWidth * Math.sin(angle);
        const baseY2 = endY - arrowLength * Math.sin(angle) + arrowWidth * Math.cos(angle);

        arrow.setAttribute('points', `${tipX},${tipY} ${baseX1},${baseY1} ${baseX2},${baseY2}`);
        arrow.setAttribute('fill', color);
        arrow.setAttribute('class', 'connection-arrow');

        return arrow;
    },

    /**
     * Select a connection
     */
    selectConnection(connectionId) {
        CampaignCanvas.deselectAll();
        CampaignCanvas.selectedConnection = connectionId;

        const group = document.querySelector(`[data-connection-id="${connectionId}"]`);
        if (group) {
            group.classList.add('selected');
            this.showConnectionToolbar(connectionId);
        }
    },

    /**
     * Deselect a connection
     */
    deselectConnection(connectionId) {
        const group = document.querySelector(`[data-connection-id="${connectionId}"]`);
        if (group) group.classList.remove('selected');
        this.hideConnectionToolbar();
    },

    /**
     * Show connection editing toolbar
     */
    showConnectionToolbar(connectionId) {
        this.hideConnectionToolbar();

        const connection = CampaignCanvas.currentBoard?.connections.find(c => c.id === connectionId);
        if (!connection) return;

        const group = document.querySelector(`[data-connection-id="${connectionId}"]`);
        if (!group) return;

        const line = group.querySelector('.connection-line');
        if (!line) return;

        const x1 = parseFloat(line.getAttribute('x1'));
        const y1 = parseFloat(line.getAttribute('y1'));
        const x2 = parseFloat(line.getAttribute('x2'));
        const y2 = parseFloat(line.getAttribute('y2'));

        const midX = (x1 + x2) / 2;
        const midY = (y1 + y2) / 2;

        // Convert to screen coords
        const screenPos = CampaignCanvas.canvasToScreen(midX, midY);

        const toolbar = document.createElement('div');
        toolbar.className = 'connection-toolbar';
        toolbar.id = 'connection-toolbar';
        toolbar.style.left = screenPos.x + 'px';
        toolbar.style.top = (screenPos.y - 40) + 'px';

        toolbar.innerHTML = `
            <button class="conn-tool-btn" data-action="label" title="Edit Label">&#128393;</button>
            <select class="conn-tool-select" data-action="color">
                ${this.colors.map(c => `<option value="${c.id}" ${connection.color === c.id ? 'selected' : ''}>${c.label}</option>`).join('')}
            </select>
            <select class="conn-tool-select" data-action="style">
                ${this.styles.map(s => `<option value="${s.id}" ${connection.style === s.id ? 'selected' : ''}>${s.label}</option>`).join('')}
            </select>
            <button class="conn-tool-btn conn-tool-delete" data-action="delete" title="Delete">&times;</button>
        `;

        toolbar.querySelector('[data-action="label"]').addEventListener('click', () => {
            this.editConnectionLabel(connectionId);
        });

        toolbar.querySelector('[data-action="color"]').addEventListener('change', (e) => {
            this.updateConnectionColor(connectionId, e.target.value);
        });

        toolbar.querySelector('[data-action="style"]').addEventListener('change', (e) => {
            this.updateConnectionStyle(connectionId, e.target.value);
        });

        toolbar.querySelector('[data-action="delete"]').addEventListener('click', () => {
            this.removeConnection(connectionId);
        });

        document.body.appendChild(toolbar);
    },

    /**
     * Hide connection toolbar
     */
    hideConnectionToolbar() {
        const toolbar = document.getElementById('connection-toolbar');
        if (toolbar) toolbar.remove();
    },

    /**
     * Edit connection label
     */
    editConnectionLabel(connectionId) {
        const connection = CampaignCanvas.currentBoard?.connections.find(c => c.id === connectionId);
        if (!connection) return;

        const newLabel = prompt('Connection label:', connection.label || '');
        if (newLabel !== null) {
            connection.label = newLabel;
            this.updateConnection(connectionId);
            CampaignCanvas.saveState();
        }
    },

    /**
     * Update connection color
     */
    updateConnectionColor(connectionId, colorId) {
        const connection = CampaignCanvas.currentBoard?.connections.find(c => c.id === connectionId);
        if (!connection) return;

        connection.color = colorId;
        this.updateConnection(connectionId);
        CampaignCanvas.saveState();
    },

    /**
     * Update connection style
     */
    updateConnectionStyle(connectionId, styleId) {
        const connection = CampaignCanvas.currentBoard?.connections.find(c => c.id === connectionId);
        if (!connection) return;

        connection.style = styleId;
        this.updateConnection(connectionId);
        CampaignCanvas.saveState();
    },

    /**
     * Update a connection's visual representation
     */
    updateConnection(connectionId) {
        // Remove old visual
        const oldGroup = document.querySelector(`[data-connection-id="${connectionId}"]`);
        if (oldGroup) oldGroup.remove();

        // Re-render
        const connection = CampaignCanvas.currentBoard?.connections.find(c => c.id === connectionId);
        if (connection) {
            this.renderConnection(connection);
            // Re-select if was selected
            if (CampaignCanvas.selectedConnection === connectionId) {
                const group = document.querySelector(`[data-connection-id="${connectionId}"]`);
                if (group) group.classList.add('selected');
            }
        }
    },

    /**
     * Update all connections for a card (when card moves)
     */
    updateConnectionsForCard(cardId) {
        if (!CampaignCanvas.currentBoard?.connections) return;

        CampaignCanvas.currentBoard.connections.forEach(conn => {
            if (conn.from === cardId || conn.to === cardId) {
                this.updateConnection(conn.id);
            }
        });
    },

    /**
     * Update all connections
     */
    updateAllConnections() {
        if (!CampaignCanvas.currentBoard?.connections) return;

        CampaignCanvas.currentBoard.connections.forEach(conn => {
            this.updateConnection(conn.id);
        });
    },

    /**
     * Remove a connection
     */
    removeConnection(connectionId) {
        if (!CampaignCanvas.currentBoard) return;

        // Remove from data
        CampaignCanvas.currentBoard.connections = CampaignCanvas.currentBoard.connections.filter(
            c => c.id !== connectionId
        );

        // Remove from DOM
        const group = document.querySelector(`[data-connection-id="${connectionId}"]`);
        if (group) group.remove();

        this.hideConnectionToolbar();
        CampaignCanvas.saveState();
    },

    /**
     * Remove all connections for a card
     */
    removeConnectionsForCard(cardId) {
        if (!CampaignCanvas.currentBoard?.connections) return;

        const toRemove = CampaignCanvas.currentBoard.connections.filter(
            c => c.from === cardId || c.to === cardId
        );

        toRemove.forEach(conn => {
            this.removeConnection(conn.id);
        });
    },

    /**
     * Show notification
     */
    showNotification(message) {
        if (typeof showNotification === 'function') {
            showNotification(message, 'info');
        }
    }
};
