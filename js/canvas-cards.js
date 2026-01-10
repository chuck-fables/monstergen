/**
 * Canvas Cards Module
 * Handles rendering, dragging, and management of cards on the campaign canvas
 */

const CanvasCards = {
    // Card type configurations
    cardTypes: {
        monster: {
            icon: '&#128009;',
            color: '#8B0000',
            label: 'Monster'
        },
        npc: {
            icon: '&#128100;',
            color: '#9E2A2B',
            label: 'NPC'
        },
        loot: {
            icon: '&#128176;',
            color: '#DAA520',
            label: 'Loot'
        },
        hook: {
            icon: '&#128220;',
            color: '#D35400',
            label: 'Hook'
        },
        location: {
            icon: '&#127984;',
            color: '#27AE60',
            label: 'Location'
        },
        item: {
            icon: '&#9876;',
            color: '#8E44AD',
            label: 'Item'
        }
    },

    // Drag state
    isDragging: false,
    dragCard: null,
    dragStartX: 0,
    dragStartY: 0,
    dragOffsetX: 0,
    dragOffsetY: 0,

    /**
     * Add a card to the canvas
     * @param {string} type - Card type (monster, npc, loot, hook, location, item)
     * @param {Object} data - The actual data object
     * @param {number} x - X position (optional, defaults to center)
     * @param {number} y - Y position (optional, defaults to center)
     */
    addCard(type, data, x = null, y = null) {
        if (!CampaignCanvas.currentBoard) {
            CampaignCanvas.createBoard('My Campaign');
        }

        // Calculate position if not provided
        if (x === null || y === null) {
            const rect = CampaignCanvas.canvas.getBoundingClientRect();
            const centerPos = CampaignCanvas.screenToCanvas(
                rect.left + rect.width / 2,
                rect.top + rect.height / 2
            );
            // Add some randomness to prevent stacking
            x = centerPos.x + (Math.random() - 0.5) * 100;
            y = centerPos.y + (Math.random() - 0.5) * 100;
        }

        const card = {
            id: 'card_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
            type: type,
            dataId: data.id,
            data: data,
            x: x,
            y: y,
            collapsed: false
        };

        CampaignCanvas.currentBoard.cards.push(card);
        this.renderCard(card);
        CampaignCanvas.saveState();

        // Show notification
        this.showNotification(`Added ${this.cardTypes[type]?.label || type} to canvas`);

        return card;
    },

    /**
     * Render a card on the canvas
     */
    renderCard(card) {
        const typeConfig = this.cardTypes[card.type] || { icon: '?', color: '#666', label: 'Unknown' };

        const el = document.createElement('div');
        el.className = `canvas-card canvas-card-${card.type}${card.collapsed ? ' collapsed' : ''}`;
        el.dataset.canvasId = card.id;
        el.dataset.cardType = card.type;
        el.style.left = card.x + 'px';
        el.style.top = card.y + 'px';
        el.style.borderColor = typeConfig.color;

        const title = this.getCardTitle(card);
        const subtitle = this.getCardSubtitle(card);

        el.innerHTML = `
            <div class="canvas-card-header" style="background: ${typeConfig.color}">
                <span class="canvas-card-icon">${typeConfig.icon}</span>
                <span class="canvas-card-title">${title}</span>
                <div class="canvas-card-actions">
                    <button class="canvas-card-btn collapse-btn" title="Collapse/Expand">&#9660;</button>
                    <button class="canvas-card-btn connect-btn" title="Connect to another card">&#128279;</button>
                    <button class="canvas-card-btn delete-btn" title="Remove from canvas">&times;</button>
                </div>
            </div>
            <div class="canvas-card-body">
                <div class="canvas-card-subtitle">${subtitle}</div>
                <div class="canvas-card-preview">${this.getCardPreview(card)}</div>
            </div>
            <div class="canvas-card-connectors">
                <div class="connector connector-top" data-side="top"></div>
                <div class="connector connector-right" data-side="right"></div>
                <div class="connector connector-bottom" data-side="bottom"></div>
                <div class="connector connector-left" data-side="left"></div>
            </div>
        `;

        // Bind events
        this.bindCardEvents(el, card);

        CampaignCanvas.viewport.appendChild(el);
    },

    /**
     * Bind events to a card element
     */
    bindCardEvents(el, card) {
        const header = el.querySelector('.canvas-card-header');

        // Drag to move
        header.addEventListener('mousedown', (e) => {
            if (e.target.classList.contains('canvas-card-btn')) return;
            this.startDrag(e, el, card);
        });

        // Click to select
        el.addEventListener('click', (e) => {
            if (e.target.classList.contains('canvas-card-btn')) return;
            e.stopPropagation();
            CampaignCanvas.deselectAll();
            CampaignCanvas.selectedCard = card.id;
            el.classList.add('selected');
        });

        // Double-click to view full
        el.addEventListener('dblclick', (e) => {
            if (e.target.classList.contains('canvas-card-btn')) return;
            this.viewFullCard(card);
        });

        // Collapse button
        el.querySelector('.collapse-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            card.collapsed = !card.collapsed;
            el.classList.toggle('collapsed', card.collapsed);
            CampaignCanvas.saveState();
            CanvasConnections.updateAllConnections();
        });

        // Connect button
        el.querySelector('.connect-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            CanvasConnections.startDrawing(card.id);
        });

        // Delete button
        el.querySelector('.delete-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            this.removeCard(card.id);
        });

        // Connector click - start connection from this side
        el.querySelectorAll('.connector').forEach(conn => {
            conn.addEventListener('mousedown', (e) => {
                e.stopPropagation();
                CanvasConnections.startDrawingFromConnector(card.id, conn.dataset.side, e);
            });
        });

        // Touch support
        header.addEventListener('touchstart', (e) => {
            if (e.target.classList.contains('canvas-card-btn')) return;
            this.startDragTouch(e, el, card);
        }, { passive: false });
    },

    /**
     * Start dragging a card
     */
    startDrag(e, el, card) {
        this.isDragging = true;
        this.dragCard = card;
        this.dragElement = el;

        const rect = el.getBoundingClientRect();
        this.dragOffsetX = e.clientX - rect.left;
        this.dragOffsetY = e.clientY - rect.top;

        el.classList.add('dragging');

        const onMove = (e) => {
            if (!this.isDragging) return;

            const pos = CampaignCanvas.screenToCanvas(e.clientX - this.dragOffsetX, e.clientY - this.dragOffsetY);
            card.x = pos.x;
            card.y = pos.y;
            el.style.left = card.x + 'px';
            el.style.top = card.y + 'px';

            // Update connections
            CanvasConnections.updateConnectionsForCard(card.id);
        };

        const onUp = () => {
            if (this.isDragging) {
                this.isDragging = false;
                el.classList.remove('dragging');
                CampaignCanvas.saveState();
            }
            document.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseup', onUp);
        };

        document.addEventListener('mousemove', onMove);
        document.addEventListener('mouseup', onUp);
    },

    /**
     * Start dragging with touch
     */
    startDragTouch(e, el, card) {
        e.preventDefault();
        const touch = e.touches[0];

        this.isDragging = true;
        this.dragCard = card;
        this.dragElement = el;

        const rect = el.getBoundingClientRect();
        this.dragOffsetX = touch.clientX - rect.left;
        this.dragOffsetY = touch.clientY - rect.top;

        el.classList.add('dragging');

        const onMove = (e) => {
            if (!this.isDragging) return;
            const touch = e.touches[0];

            const pos = CampaignCanvas.screenToCanvas(touch.clientX - this.dragOffsetX, touch.clientY - this.dragOffsetY);
            card.x = pos.x;
            card.y = pos.y;
            el.style.left = card.x + 'px';
            el.style.top = card.y + 'px';

            CanvasConnections.updateConnectionsForCard(card.id);
        };

        const onEnd = () => {
            if (this.isDragging) {
                this.isDragging = false;
                el.classList.remove('dragging');
                CampaignCanvas.saveState();
            }
            document.removeEventListener('touchmove', onMove);
            document.removeEventListener('touchend', onEnd);
        };

        document.addEventListener('touchmove', onMove, { passive: false });
        document.addEventListener('touchend', onEnd);
    },

    /**
     * Remove a card from the canvas
     */
    removeCard(cardId) {
        if (!CampaignCanvas.currentBoard) return;

        // Remove related connections
        CanvasConnections.removeConnectionsForCard(cardId);

        // Remove from data
        CampaignCanvas.currentBoard.cards = CampaignCanvas.currentBoard.cards.filter(c => c.id !== cardId);

        // Remove from DOM
        const el = document.querySelector(`[data-canvas-id="${cardId}"]`);
        if (el) el.remove();

        CampaignCanvas.saveState();
    },

    /**
     * Get card title
     */
    getCardTitle(card) {
        const data = card.data;
        if (!data) return 'Unknown';

        switch (card.type) {
            case 'monster':
                return data.name || 'Monster';
            case 'npc':
                return data.name || 'NPC';
            case 'loot':
                return data.hoardName || 'Treasure Hoard';
            case 'hook':
                return data.title || 'Adventure Hook';
            case 'location':
                return data.name || 'Location';
            case 'item':
                return data.name || 'Magic Item';
            default:
                return data.name || 'Unknown';
        }
    },

    /**
     * Get card subtitle
     */
    getCardSubtitle(card) {
        const data = card.data;
        if (!data) return '';

        switch (card.type) {
            case 'monster':
                return `CR ${data.cr || '?'} ${data.type || ''}`;
            case 'npc':
                return `${data.raceName || ''} ${data.vocation?.name || ''}`;
            case 'loot':
                return `${data.totalValue || 0} gp total`;
            case 'hook':
                return data.theme || data.biome?.name || '';
            case 'location':
                return data.type || data.scale || '';
            case 'item':
                return `${data.rarity || ''} ${data.type || ''}`;
            default:
                return '';
        }
    },

    /**
     * Get card preview content
     */
    getCardPreview(card) {
        const data = card.data;
        if (!data) return '';

        switch (card.type) {
            case 'monster':
                return `AC ${data.ac || '?'} | HP ${data.hp?.average || '?'}`;
            case 'npc':
                return data.personality ? data.personality.substring(0, 80) + '...' : '';
            case 'loot':
                const items = [];
                if (data.gold) items.push(`${data.gold.total || 0} gp`);
                if (data.magicItems?.length) items.push(`${data.magicItems.length} magic items`);
                return items.join(' | ') || '';
            case 'hook':
                return data.setup ? data.setup.substring(0, 80) + '...' : '';
            case 'location':
                return data.description ? data.description.substring(0, 80) + '...' : '';
            case 'item':
                return data.description ? data.description.substring(0, 80) + '...' : '';
            default:
                return '';
        }
    },

    /**
     * View full card details (opens modal or panel)
     */
    viewFullCard(card) {
        // Create a modal to show full card
        const modal = document.createElement('div');
        modal.className = 'canvas-card-modal';
        modal.innerHTML = `
            <div class="canvas-card-modal-backdrop"></div>
            <div class="canvas-card-modal-content">
                <button class="canvas-card-modal-close">&times;</button>
                <div class="canvas-card-modal-body">
                    ${this.renderFullCard(card)}
                </div>
            </div>
        `;

        modal.querySelector('.canvas-card-modal-backdrop').addEventListener('click', () => modal.remove());
        modal.querySelector('.canvas-card-modal-close').addEventListener('click', () => modal.remove());

        document.body.appendChild(modal);
    },

    /**
     * Render full card content for modal
     */
    renderFullCard(card) {
        const data = card.data;
        if (!data) return '<p>No data available</p>';

        // Use existing renderers if available
        switch (card.type) {
            case 'monster':
                if (typeof StatblockRenderer !== 'undefined') {
                    return StatblockRenderer.render(data);
                }
                break;
            case 'npc':
                if (typeof NPCCardRenderer !== 'undefined') {
                    return NPCCardRenderer.render(data, { expanded: true });
                }
                break;
            case 'loot':
                if (typeof LootCardRenderer !== 'undefined') {
                    return LootCardRenderer.render(data, { showTags: true, showValues: true });
                }
                break;
            case 'hook':
                if (typeof HookCardRenderer !== 'undefined') {
                    return HookCardRenderer.renderSingle(data, { showEnvironment: true, showLoot: true, showMoral: true });
                }
                break;
            case 'location':
                if (typeof LocationCardRenderer !== 'undefined') {
                    return LocationCardRenderer.render(data);
                }
                break;
            case 'item':
                if (typeof ItemCardRenderer !== 'undefined') {
                    return ItemCardRenderer.render(data);
                }
                break;
        }

        // Fallback to JSON display
        return `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    },

    /**
     * Get a card's center position for connection lines
     */
    getCardCenter(cardId) {
        const el = document.querySelector(`[data-canvas-id="${cardId}"]`);
        if (!el) return null;

        const card = CampaignCanvas.currentBoard?.cards.find(c => c.id === cardId);
        if (!card) return null;

        const width = el.offsetWidth;
        const height = el.offsetHeight;

        return {
            x: card.x + width / 2,
            y: card.y + height / 2
        };
    },

    /**
     * Get connector position for a card
     */
    getConnectorPosition(cardId, side) {
        const el = document.querySelector(`[data-canvas-id="${cardId}"]`);
        if (!el) return null;

        const card = CampaignCanvas.currentBoard?.cards.find(c => c.id === cardId);
        if (!card) return null;

        const width = el.offsetWidth;
        const height = el.offsetHeight;

        switch (side) {
            case 'top':
                return { x: card.x + width / 2, y: card.y };
            case 'right':
                return { x: card.x + width, y: card.y + height / 2 };
            case 'bottom':
                return { x: card.x + width / 2, y: card.y + height };
            case 'left':
                return { x: card.x, y: card.y + height / 2 };
            default:
                return this.getCardCenter(cardId);
        }
    },

    /**
     * Show notification
     */
    showNotification(message) {
        if (typeof showNotification === 'function') {
            showNotification(message, 'success');
        }
    }
};
