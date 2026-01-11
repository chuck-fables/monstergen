/**
 * Canvas Cards Module
 * Handles rendering, dragging, and management of cards on the campaign canvas
 */

const CanvasCards = {
    // Drag state
    isDragging: false,
    dragCard: null,
    dragElement: null,
    dragOffsetX: 0,
    dragOffsetY: 0,

    // Touch state for mobile
    touchStartTime: 0,
    touchStartX: 0,
    touchStartY: 0,
    touchMoved: false,
    selectedCardForBubble: null,

    // SVG icons for card types
    icons: {
        monster: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L9 7H4l3 5-3 5h5l3 5 3-5h5l-3-5 3-5h-5L12 2z"></path></svg>',
        npc: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>',
        loot: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><text x="12" y="15" text-anchor="middle" font-size="8" fill="currentColor" stroke="none">GP</text></svg>',
        hook: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>',
        location: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>',
        item: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>',
        connect: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>'
    },

    // Card type configurations
    cardTypes: {
        monster: {
            color: '#8B0000',
            label: 'Monster'
        },
        npc: {
            color: '#9E2A2B',
            label: 'NPC'
        },
        loot: {
            color: '#DAA520',
            label: 'Loot'
        },
        hook: {
            color: '#D35400',
            label: 'Hook'
        },
        location: {
            color: '#27AE60',
            label: 'Location'
        },
        item: {
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
        CampaignCanvas.updateEmptyState();

        // Show notification
        this.showNotification(`Added ${this.cardTypes[type]?.label || type} to canvas`);

        return card;
    },

    /**
     * Render a card on the canvas
     */
    renderCard(card) {
        const typeConfig = this.cardTypes[card.type] || { color: '#666', label: 'Unknown' };
        const icon = this.icons[card.type] || '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>';

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
                <span class="canvas-card-icon">${icon}</span>
                <span class="canvas-card-title">${title}</span>
                <div class="canvas-card-actions">
                    <button class="canvas-card-btn expand-btn" title="View full details">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <polyline points="9 21 3 21 3 15"></polyline>
                            <line x1="21" y1="3" x2="14" y2="10"></line>
                            <line x1="3" y1="21" x2="10" y2="14"></line>
                        </svg>
                    </button>
                    <button class="canvas-card-btn collapse-btn" title="Collapse/Expand">&#9660;</button>
                    <button class="canvas-card-btn delete-btn" title="Remove from canvas">&times;</button>
                </div>
            </div>
            <div class="canvas-card-body">
                <div class="canvas-card-subtitle">${subtitle}</div>
                <div class="canvas-card-preview">${this.getCardPreview(card)}</div>
            </div>
            <div class="canvas-card-connectors">
                <button class="connector connector-top" data-side="top" title="Connect">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                </button>
                <button class="connector connector-right" data-side="right" title="Connect">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                </button>
                <button class="connector connector-bottom" data-side="bottom" title="Connect">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                </button>
                <button class="connector connector-left" data-side="left" title="Connect">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                </button>
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

        // Expand button - view full details
        el.querySelector('.expand-btn').addEventListener('click', (e) => {
            e.stopPropagation();
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

        // Delete button
        el.querySelector('.delete-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            CampaignCanvas.saveUndoState('Delete card');
            this.removeCard(card.id);
        });

        // Connector click - start or complete connection from this side
        el.querySelectorAll('.connector').forEach(conn => {
            conn.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                CanvasConnections.handleConnectorClick(card.id, conn.dataset.side);
            });
        });

        // Touch support - tap to select and show bubble, drag from bubble to move
        header.addEventListener('touchstart', (e) => {
            if (e.target.classList.contains('canvas-card-btn')) return;
            this.onCardTouchStart(e, el, card);
        }, { passive: false });

        header.addEventListener('touchmove', (e) => {
            this.onCardTouchMove(e);
        }, { passive: false });

        header.addEventListener('touchend', (e) => {
            if (e.target.classList.contains('canvas-card-btn')) return;
            this.onCardTouchEnd(e, el, card);
        });
    },

    /**
     * Handle card touch start - detect tap vs drag
     */
    onCardTouchStart(e, el, card) {
        const touch = e.touches[0];
        this.touchStartTime = Date.now();
        this.touchStartX = touch.clientX;
        this.touchStartY = touch.clientY;
        this.touchMoved = false;
    },

    onCardTouchMove(e) {
        if (e.touches.length !== 1) return;
        const touch = e.touches[0];
        const dx = Math.abs(touch.clientX - this.touchStartX);
        const dy = Math.abs(touch.clientY - this.touchStartY);
        if (dx > 10 || dy > 10) {
            this.touchMoved = true;
        }
    },

    onCardTouchEnd(e, el, card) {
        const touchDuration = Date.now() - this.touchStartTime;

        // If it was a quick tap without much movement, select and show bubble
        if (!this.touchMoved && touchDuration < 300) {
            e.preventDefault();
            CampaignCanvas.deselectAll();
            CampaignCanvas.selectedCard = card.id;
            el.classList.add('selected');
            this.showCardActionBubble(card, el);
        }
    },

    /**
     * Show mobile action bubble for a card
     */
    showCardActionBubble(card, el) {
        this.hideCardActionBubble();

        const rect = el.getBoundingClientRect();
        this.selectedCardForBubble = card;

        // Create bubble container
        const bubble = document.createElement('div');
        bubble.className = 'canvas-card-action-bubble';
        bubble.id = 'canvas-card-bubble';
        bubble.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="5 9 2 12 5 15"></polyline>
                <polyline points="9 5 12 2 15 5"></polyline>
                <polyline points="15 19 12 22 9 19"></polyline>
                <polyline points="19 9 22 12 19 15"></polyline>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <line x1="12" y1="2" x2="12" y2="22"></line>
            </svg>
        `;
        bubble.title = 'Drag to move';

        // Position bubble to the left of the card
        bubble.style.left = (rect.left - 60) + 'px';
        bubble.style.top = (rect.top + rect.height / 2 - 24) + 'px';

        // Mouse/touch handlers for bubble
        bubble.addEventListener('mousedown', (e) => this.onBubbleDragStart(e, card, el));
        bubble.addEventListener('touchstart', (e) => this.onBubbleTouchStart(e, card, el), { passive: false });

        document.body.appendChild(bubble);
    },

    hideCardActionBubble() {
        const bubble = document.getElementById('canvas-card-bubble');
        if (bubble) bubble.remove();
        this.selectedCardForBubble = null;
    },

    /**
     * Start dragging from bubble (mouse)
     */
    onBubbleDragStart(e, card, el) {
        e.preventDefault();
        e.stopPropagation();

        CampaignCanvas.saveUndoState('Move card');

        this.isDragging = true;
        this.dragCard = card;
        this.dragElement = el;

        const rect = el.getBoundingClientRect();
        this.dragOffsetX = rect.width / 2;
        this.dragOffsetY = rect.height / 2;

        el.classList.add('dragging');

        document.addEventListener('mousemove', this.boundBubbleDrag = (e) => this.onBubbleDrag(e));
        document.addEventListener('mouseup', this.boundBubbleDragEnd = (e) => this.onBubbleDragEnd(e));
    },

    /**
     * Start dragging from bubble (touch)
     */
    onBubbleTouchStart(e, card, el) {
        e.preventDefault();
        e.stopPropagation();

        CampaignCanvas.saveUndoState('Move card');

        const touch = e.touches[0];
        this.isDragging = true;
        this.dragCard = card;
        this.dragElement = el;

        const rect = el.getBoundingClientRect();
        this.dragOffsetX = rect.width / 2;
        this.dragOffsetY = rect.height / 2;

        el.classList.add('dragging');

        document.addEventListener('touchmove', this.boundBubbleTouchDrag = (e) => this.onBubbleTouchDrag(e), { passive: false });
        document.addEventListener('touchend', this.boundBubbleTouchEnd = (e) => this.onBubbleTouchEnd(e));
    },

    onBubbleDrag(e) {
        if (!this.isDragging || !this.dragCard || !this.dragElement) return;

        const pos = CampaignCanvas.screenToCanvas(e.clientX - this.dragOffsetX, e.clientY - this.dragOffsetY);
        this.dragCard.x = pos.x;
        this.dragCard.y = pos.y;
        this.dragElement.style.left = this.dragCard.x + 'px';
        this.dragElement.style.top = this.dragCard.y + 'px';

        // Update bubble position
        const rect = this.dragElement.getBoundingClientRect();
        const bubble = document.getElementById('canvas-card-bubble');
        if (bubble) {
            bubble.style.left = (rect.left - 60) + 'px';
            bubble.style.top = (rect.top + rect.height / 2 - 24) + 'px';
        }

        CanvasConnections.updateConnectionsForCard(this.dragCard.id);
    },

    onBubbleTouchDrag(e) {
        if (!this.isDragging || !this.dragCard || !this.dragElement) return;
        if (e.touches.length !== 1) return;
        e.preventDefault();

        const touch = e.touches[0];
        const pos = CampaignCanvas.screenToCanvas(touch.clientX - this.dragOffsetX, touch.clientY - this.dragOffsetY);
        this.dragCard.x = pos.x;
        this.dragCard.y = pos.y;
        this.dragElement.style.left = this.dragCard.x + 'px';
        this.dragElement.style.top = this.dragCard.y + 'px';

        // Update bubble position
        const rect = this.dragElement.getBoundingClientRect();
        const bubble = document.getElementById('canvas-card-bubble');
        if (bubble) {
            bubble.style.left = (rect.left - 60) + 'px';
            bubble.style.top = (rect.top + rect.height / 2 - 24) + 'px';
        }

        CanvasConnections.updateConnectionsForCard(this.dragCard.id);
    },

    onBubbleDragEnd(e) {
        if (this.isDragging) {
            this.isDragging = false;
            if (this.dragElement) {
                this.dragElement.classList.remove('dragging');
            }
            CampaignCanvas.saveState();
        }
        document.removeEventListener('mousemove', this.boundBubbleDrag);
        document.removeEventListener('mouseup', this.boundBubbleDragEnd);
    },

    onBubbleTouchEnd(e) {
        if (this.isDragging) {
            this.isDragging = false;
            if (this.dragElement) {
                this.dragElement.classList.remove('dragging');
            }
            CampaignCanvas.saveState();
        }
        document.removeEventListener('touchmove', this.boundBubbleTouchDrag);
        document.removeEventListener('touchend', this.boundBubbleTouchEnd);
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
        CampaignCanvas.updateEmptyState();
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
                // Support both generated monsters (armorClass.value, hitPoints.average) and SRD monsters (ac, hp)
                const ac = data.ac ?? data.armorClass?.value ?? '?';
                const hp = data.hp ?? data.hitPoints?.average ?? '?';
                return `AC ${ac} | HP ${hp}`;
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
        modal.className = `canvas-card-modal canvas-card-modal-${card.type}`;
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

        // Use existing renderers with hideActions option to hide buttons in canvas modal
        switch (card.type) {
            case 'monster':
                // Check if this is an SRD monster (has 'ac' directly instead of 'armorClass.value')
                if (data.source === 'SRD' || (data.ac !== undefined && data.armorClass === undefined)) {
                    // Use SRDPanel's renderStatblock for SRD monsters
                    if (typeof SRDPanel !== 'undefined' && SRDPanel.renderStatblock) {
                        return SRDPanel.renderStatblock(data);
                    }
                }
                // Generated monsters use StatblockRenderer
                if (typeof StatblockRenderer !== 'undefined') {
                    return StatblockRenderer.render(data, { hideActions: true });
                }
                break;
            case 'npc':
                if (typeof NPCCardRenderer !== 'undefined') {
                    return NPCCardRenderer.render(data, { expanded: true, hideActions: true });
                }
                break;
            case 'loot':
                if (typeof LootCardRenderer !== 'undefined') {
                    return LootCardRenderer.render(data, { showTags: true, showValues: true, hideActions: true });
                }
                break;
            case 'hook':
                if (typeof HookCardRenderer !== 'undefined') {
                    return HookCardRenderer.renderSingle(data, { showEnvironment: true, showLoot: true, showMoral: true, hideActions: true });
                }
                break;
            case 'location':
                if (typeof LocationCardRenderer !== 'undefined') {
                    return LocationCardRenderer.renderSingle(data, { hideActions: true });
                }
                break;
            case 'item':
                if (typeof ItemCardRenderer !== 'undefined') {
                    return ItemCardRenderer.renderSingle(data, { hideActions: true });
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
