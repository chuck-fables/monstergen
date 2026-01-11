// SRD Panel Controller
const SRDPanel = {
    currentTab: 'monsters',
    currentSearch: '',
    currentFilters: {},
    selectedMonster: null,
    customEntries: {
        monsters: [],
        spells: [],
        items: [],
        classes: []
    },

    init() {
        // Load custom entries from localStorage
        this.loadCustomEntries();
        // Render initial tab
        this.switchTab('monsters');
    },

    loadCustomEntries() {
        const saved = localStorage.getItem('dmtk_srd_custom');
        if (saved) {
            try {
                this.customEntries = JSON.parse(saved);
            } catch (e) {
                console.error('Failed to load custom SRD entries:', e);
            }
        }
    },

    saveCustomEntries() {
        localStorage.setItem('dmtk_srd_custom', JSON.stringify(this.customEntries));
    },

    // Linkify spell names in text - makes them clickable
    linkifySpells(text) {
        const allSpells = this.getAllSpells();
        if (!allSpells || allSpells.length === 0) return text;

        // Create a map of lowercase spell names to actual spell objects
        const spellMap = new Map();
        allSpells.forEach(spell => {
            spellMap.set(spell.name.toLowerCase(), spell);
        });

        // Sort spell names by length (longest first) to avoid partial matches
        const spellNames = Array.from(spellMap.keys()).sort((a, b) => b.length - a.length);

        // Escape special regex characters in spell names
        const escapedNames = spellNames.map(name => name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));

        // Create a single regex that matches all spell names (longest first)
        const combinedRegex = new RegExp(`\\b(${escapedNames.join('|')})\\b`, 'gi');

        // Replace all matches in a single pass
        const result = text.replace(combinedRegex, (match) => {
            const spellNameEscaped = match.replace(/'/g, "\\'");
            return `<a href="#" class="spell-link" data-spell="${match}" onclick="SRDPanel.showSpellModal('${spellNameEscaped}'); return false;">${match}</a>`;
        });

        return result;
    },

    // Show a spell in a modal
    showSpellModal(spellName) {
        const allSpells = this.getAllSpells();
        const spell = allSpells.find(s => s.name.toLowerCase() === spellName.toLowerCase());

        if (!spell) {
            console.warn('Spell not found:', spellName);
            return;
        }

        // Create modal HTML
        const modalHtml = `
            <div id="srd-spell-modal" class="srd-spell-modal" onclick="if(event.target === this) SRDPanel.closeSpellModal()">
                <div class="srd-spell-modal-content">
                    <div class="modal-header">
                        <h2>${spell.name}</h2>
                        <button class="modal-close" onclick="SRDPanel.closeSpellModal()">&times;</button>
                    </div>
                    <div class="modal-body">
                        <p><em>${spell.level === 0 ? 'Cantrip' : `Level ${spell.level}`} ${spell.school}</em></p>
                        <p><strong>Casting Time:</strong> ${spell.castingTime}</p>
                        <p><strong>Range:</strong> ${spell.range}</p>
                        <p><strong>Components:</strong> ${spell.components}</p>
                        <p><strong>Duration:</strong> ${spell.duration}</p>
                        <p><strong>Classes:</strong> ${spell.classes ? spell.classes.join(', ') : 'N/A'}</p>
                        <hr style="border-color: var(--srd-border-light); margin: 0.75rem 0;">
                        <p>${spell.description}</p>
                    </div>
                </div>
            </div>
        `;

        // Remove existing spell modal if any
        const existingModal = document.getElementById('srd-spell-modal');
        if (existingModal) existingModal.remove();

        // Add modal to body
        document.body.insertAdjacentHTML('beforeend', modalHtml);
    },

    closeSpellModal() {
        const modal = document.getElementById('srd-spell-modal');
        if (modal) modal.remove();
    },

    switchTab(tab) {
        this.currentTab = tab;
        this.currentSearch = '';
        this.currentFilters = {};

        // Clear search
        const searchInput = document.getElementById('srd-search');
        if (searchInput) searchInput.value = '';

        // Update tab buttons
        document.querySelectorAll('.srd-tab').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.tab === tab);
        });

        // Update tab content
        document.querySelectorAll('.srd-tab-content').forEach(content => {
            content.classList.toggle('active', content.id === `srd-${tab}-content`);
        });

        // Render filters for this tab
        this.renderFilters();

        // Render content
        this.renderContent();
    },

    renderFilters() {
        const filtersContainer = document.getElementById('srd-filters');
        if (!filtersContainer) return;

        let html = '';

        switch (this.currentTab) {
            case 'monsters':
                html = `
                    <select id="srd-filter-type" onchange="SRDPanel.setFilter('type', this.value)">
                        <option value="">All Types</option>
                        <option value="aberration">Aberration</option>
                        <option value="beast">Beast</option>
                        <option value="celestial">Celestial</option>
                        <option value="construct">Construct</option>
                        <option value="dragon">Dragon</option>
                        <option value="elemental">Elemental</option>
                        <option value="fey">Fey</option>
                        <option value="fiend">Fiend</option>
                        <option value="giant">Giant</option>
                        <option value="humanoid">Humanoid</option>
                        <option value="monstrosity">Monstrosity</option>
                        <option value="ooze">Ooze</option>
                        <option value="plant">Plant</option>
                        <option value="undead">Undead</option>
                    </select>
                    <select id="srd-filter-cr" onchange="SRDPanel.setFilter('cr', this.value)">
                        <option value="">All CRs</option>
                        <option value="0-1">CR 0-1</option>
                        <option value="2-4">CR 2-4</option>
                        <option value="5-10">CR 5-10</option>
                        <option value="11-16">CR 11-16</option>
                        <option value="17+">CR 17+</option>
                    </select>
                `;
                break;
            case 'spells':
                html = `
                    <select id="srd-filter-level" onchange="SRDPanel.setFilter('level', this.value)">
                        <option value="">All Levels</option>
                        <option value="0">Cantrips</option>
                        <option value="1">1st Level</option>
                        <option value="2">2nd Level</option>
                        <option value="3">3rd Level</option>
                        <option value="4">4th Level</option>
                        <option value="5">5th Level</option>
                        <option value="6">6th Level</option>
                        <option value="7">7th Level</option>
                        <option value="8">8th Level</option>
                        <option value="9">9th Level</option>
                    </select>
                    <select id="srd-filter-school" onchange="SRDPanel.setFilter('school', this.value)">
                        <option value="">All Schools</option>
                        <option value="abjuration">Abjuration</option>
                        <option value="conjuration">Conjuration</option>
                        <option value="divination">Divination</option>
                        <option value="enchantment">Enchantment</option>
                        <option value="evocation">Evocation</option>
                        <option value="illusion">Illusion</option>
                        <option value="necromancy">Necromancy</option>
                        <option value="transmutation">Transmutation</option>
                    </select>
                    <select id="srd-filter-class" onchange="SRDPanel.setFilter('class', this.value)">
                        <option value="">All Classes</option>
                        <option value="Bard">Bard</option>
                        <option value="Cleric">Cleric</option>
                        <option value="Druid">Druid</option>
                        <option value="Paladin">Paladin</option>
                        <option value="Ranger">Ranger</option>
                        <option value="Sorcerer">Sorcerer</option>
                        <option value="Warlock">Warlock</option>
                        <option value="Wizard">Wizard</option>
                    </select>
                `;
                break;
            case 'items':
                html = `
                    <select id="srd-filter-item-type" onchange="SRDPanel.setFilter('type', this.value)">
                        <option value="">All Types</option>
                        <option value="Armor">Armor</option>
                        <option value="Weapon">Weapon</option>
                        <option value="Potion">Potion</option>
                        <option value="Ring">Ring</option>
                        <option value="Wondrous Item">Wondrous Item</option>
                        <option value="Wand">Wand</option>
                        <option value="Staff">Staff</option>
                    </select>
                    <select id="srd-filter-rarity" onchange="SRDPanel.setFilter('rarity', this.value)">
                        <option value="">All Rarities</option>
                        <option value="Common">Common</option>
                        <option value="Uncommon">Uncommon</option>
                        <option value="Rare">Rare</option>
                        <option value="Very Rare">Very Rare</option>
                        <option value="Legendary">Legendary</option>
                    </select>
                `;
                break;
            case 'classes':
                // No filters needed for classes
                html = '';
                break;
        }

        filtersContainer.innerHTML = html;
    },

    setFilter(key, value) {
        if (value) {
            this.currentFilters[key] = value;
        } else {
            delete this.currentFilters[key];
        }
        this.renderContent();
    },

    search(query) {
        this.currentSearch = query.toLowerCase();
        this.renderContent();
    },

    renderContent() {
        switch (this.currentTab) {
            case 'monsters':
                this.renderMonsters();
                break;
            case 'spells':
                this.renderSpells();
                break;
            case 'items':
                this.renderItems();
                break;
            case 'classes':
                this.renderClasses();
                break;
        }
    },

    getAllMonsters() {
        // Combine SRD monsters with custom monsters
        const srd = [
            ...(window.SRDMonsters || []),
            ...(window.SRDMonsters2 || []),
            ...(window.SRDMonsters3 || []),
            ...(window.SRDMonsters4a || []),
            ...(window.SRDMonsters4b || []),
            ...(window.SRDMonsters5 || []),
            ...(window.SRDMonsters6a || []),
            ...(window.SRDMonsters6b || [])
        ];
        const custom = this.customEntries.monsters.map(m => ({ ...m, isCustom: true }));
        return [...srd, ...custom];
    },

    getAllSpells() {
        const srd = [
            ...(window.SRDSpells || []),
            ...(window.SRDSpells2 || []),
            ...(window.SRDSpells2a || []),
            ...(window.SRDSpells3a || []),
            ...(window.SRDSpells3b || [])
        ];
        const custom = this.customEntries.spells.map(s => ({ ...s, isCustom: true }));
        return [...srd, ...custom];
    },

    getAllItems() {
        const srd = window.SRDItems || [];
        const custom = this.customEntries.items.map(i => ({ ...i, isCustom: true }));
        return [...srd, ...custom];
    },

    getAllClasses() {
        const srd = window.SRDClasses || [];
        const custom = this.customEntries.classes.map(c => ({ ...c, isCustom: true }));
        return [...srd, ...custom];
    },

    filterMonsters(monsters) {
        return monsters.filter(m => {
            // Search filter
            if (this.currentSearch && !m.name.toLowerCase().includes(this.currentSearch)) {
                return false;
            }
            // Type filter
            if (this.currentFilters.type && m.type.toLowerCase() !== this.currentFilters.type) {
                return false;
            }
            // CR filter
            if (this.currentFilters.cr) {
                const cr = this.parseCR(m.cr);
                switch (this.currentFilters.cr) {
                    case '0-1': if (cr > 1) return false; break;
                    case '2-4': if (cr < 2 || cr > 4) return false; break;
                    case '5-10': if (cr < 5 || cr > 10) return false; break;
                    case '11-16': if (cr < 11 || cr > 16) return false; break;
                    case '17+': if (cr < 17) return false; break;
                }
            }
            return true;
        });
    },

    parseCR(cr) {
        if (typeof cr === 'number') return cr;
        if (cr === '1/8') return 0.125;
        if (cr === '1/4') return 0.25;
        if (cr === '1/2') return 0.5;
        return parseFloat(cr) || 0;
    },

    renderMonsters() {
        const container = document.getElementById('srd-monsters-list');
        if (!container) return;

        const monsters = this.filterMonsters(this.getAllMonsters());

        if (monsters.length === 0) {
            container.innerHTML = '<div class="srd-empty">No monsters found matching your criteria.</div>';
            return;
        }

        // Sort alphabetically
        monsters.sort((a, b) => a.name.localeCompare(b.name));

        container.innerHTML = monsters.map(m => this.renderMonsterCard(m)).join('');
    },

    renderMonsterCard(monster) {
        const crDisplay = this.formatCR(monster.cr);
        const customBadge = monster.isCustom ? '<span class="srd-badge srd-badge-custom">Custom</span>' : '';

        return `
            <div class="srd-card srd-monster-card" onclick="SRDPanel.showMonster('${monster.name.replace(/'/g, "\\'")}')">
                <div class="srd-card-header">
                    <h3>${monster.name}</h3>
                    ${customBadge}
                </div>
                <div class="srd-card-meta">
                    <span class="srd-meta-type">${this.capitalize(monster.size)} ${monster.type}</span>
                    <span class="srd-meta-cr">CR ${crDisplay}</span>
                </div>
                <div class="srd-card-stats">
                    <span>AC ${monster.ac}</span>
                    <span>HP ${monster.hp}</span>
                </div>
            </div>
        `;
    },

    formatCR(cr) {
        if (cr === '0.125' || cr === 0.125) return '1/8';
        if (cr === '0.25' || cr === 0.25) return '1/4';
        if (cr === '0.5' || cr === 0.5) return '1/2';
        return cr;
    },

    capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    },

    showMonster(name) {
        const monsters = this.getAllMonsters();
        const monster = monsters.find(m => m.name === name);
        if (!monster) return;

        this.selectedMonster = monster;

        // Update modal title
        document.getElementById('srd-monster-modal-title').textContent = monster.name;

        // Render statblock in modal body
        const body = document.getElementById('srd-monster-modal-body');
        body.innerHTML = this.renderStatblock(monster);

        // Show modal
        document.getElementById('srd-monster-modal').classList.remove('hidden');
    },

    renderStatblock(monster) {
        const getMod = (score) => {
            const mod = Math.floor((score - 10) / 2);
            return mod >= 0 ? `+${mod}` : `${mod}`;
        };

        let html = `<div class="statblock" id="srd-statblock">`;

        // Header
        html += `
            <div class="statblock-header">
                <h1>${monster.name}</h1>
                <p class="statblock-subheading">${this.capitalize(monster.size)} ${monster.type}${monster.subtype ? ` (${monster.subtype})` : ''}, ${monster.alignment}</p>
            </div>
        `;

        // Basic stats
        html += `<div class="statblock-section">`;
        html += `<p><strong>Armor Class</strong> ${monster.ac}${monster.acType ? ` (${monster.acType})` : ''}</p>`;
        html += `<p><strong>Hit Points</strong> ${monster.hp}${monster.hpDice ? ` (${monster.hpDice})` : ''}</p>`;
        html += `<p><strong>Speed</strong> ${monster.speed}</p>`;
        html += `</div>`;

        // Ability scores
        html += `
            <div class="statblock-abilities">
                <div class="ability"><span class="ability-name">STR</span><span class="ability-score">${monster.str} (${getMod(monster.str)})</span></div>
                <div class="ability"><span class="ability-name">DEX</span><span class="ability-score">${monster.dex} (${getMod(monster.dex)})</span></div>
                <div class="ability"><span class="ability-name">CON</span><span class="ability-score">${monster.con} (${getMod(monster.con)})</span></div>
                <div class="ability"><span class="ability-name">INT</span><span class="ability-score">${monster.int} (${getMod(monster.int)})</span></div>
                <div class="ability"><span class="ability-name">WIS</span><span class="ability-score">${monster.wis} (${getMod(monster.wis)})</span></div>
                <div class="ability"><span class="ability-name">CHA</span><span class="ability-score">${monster.cha} (${getMod(monster.cha)})</span></div>
            </div>
        `;

        // Saving throws, skills, etc.
        html += `<div class="statblock-section">`;
        if (monster.saves && monster.saves.length) {
            html += `<p><strong>Saving Throws</strong> ${monster.saves.join(', ')}</p>`;
        }
        if (monster.skills && monster.skills.length) {
            html += `<p><strong>Skills</strong> ${monster.skills.join(', ')}</p>`;
        }
        if (monster.resistances && monster.resistances.length) {
            html += `<p><strong>Damage Resistances</strong> ${monster.resistances.join(', ')}</p>`;
        }
        if (monster.immunities && monster.immunities.length) {
            html += `<p><strong>Damage Immunities</strong> ${monster.immunities.join(', ')}</p>`;
        }
        if (monster.conditionImmunities && monster.conditionImmunities.length) {
            html += `<p><strong>Condition Immunities</strong> ${monster.conditionImmunities.join(', ')}</p>`;
        }
        html += `<p><strong>Senses</strong> ${monster.senses}</p>`;
        html += `<p><strong>Languages</strong> ${monster.languages}</p>`;
        html += `<p><strong>Challenge</strong> ${this.formatCR(monster.cr)} (${this.getXP(monster.cr)} XP)</p>`;
        html += `</div>`;

        // Traits
        if (monster.traits && monster.traits.length) {
            html += `<div class="statblock-section statblock-traits">`;
            monster.traits.forEach(trait => {
                // Linkify spells in Spellcasting traits
                const description = trait.name.toLowerCase().includes('spellcasting')
                    ? this.linkifySpells(trait.description)
                    : trait.description;
                html += `<p><strong><em>${trait.name}.</em></strong> ${description}</p>`;
            });
            html += `</div>`;
        }

        // Actions
        if (monster.actions && monster.actions.length) {
            html += `<div class="statblock-section"><h2>Actions</h2>`;
            monster.actions.forEach(action => {
                html += `<p><strong><em>${action.name}.</em></strong> ${action.description}</p>`;
            });
            html += `</div>`;
        }

        // Legendary Actions
        if (monster.legendaryActions && monster.legendaryActions.length) {
            html += `<div class="statblock-section"><h2>Legendary Actions</h2>`;
            html += `<p>The ${monster.name.toLowerCase()} can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The ${monster.name.toLowerCase()} regains spent legendary actions at the start of its turn.</p>`;
            monster.legendaryActions.forEach(action => {
                html += `<p><strong>${action.name}.</strong> ${action.description}</p>`;
            });
            html += `</div>`;
        }

        html += `</div>`;
        return html;
    },

    getXP(cr) {
        const xpByCR = {
            '0': '10', '0.125': '25', '0.25': '50', '0.5': '100',
            '1': '200', '2': '450', '3': '700', '4': '1,100', '5': '1,800',
            '6': '2,300', '7': '2,900', '8': '3,900', '9': '5,000', '10': '5,900',
            '11': '7,200', '12': '8,400', '13': '10,000', '14': '11,500', '15': '13,000',
            '16': '15,000', '17': '18,000', '18': '20,000', '19': '22,000', '20': '25,000',
            '21': '33,000', '22': '41,000', '23': '50,000', '24': '62,000', '25': '75,000',
            '26': '90,000', '27': '105,000', '28': '120,000', '29': '135,000', '30': '155,000'
        };
        return xpByCR[String(cr)] || '0';
    },

    closeMonsterModal() {
        document.getElementById('srd-monster-modal').classList.add('hidden');
        this.selectedMonster = null;
    },

    async exportMonsterPng() {
        if (!this.selectedMonster) return;

        const statblock = document.getElementById('srd-statblock');
        if (!statblock || typeof html2canvas === 'undefined') {
            alert('Export functionality requires html2canvas library.');
            return;
        }

        try {
            const canvas = await html2canvas(statblock, {
                backgroundColor: '#fdf1dc',
                scale: 2
            });

            const link = document.createElement('a');
            link.download = `${this.selectedMonster.name.replace(/\s+/g, '_')}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
        } catch (e) {
            console.error('Failed to export PNG:', e);
            alert('Failed to export PNG. Please try again.');
        }
    },

    addMonsterToCampaign() {
        if (!this.selectedMonster) return;

        // Check if CanvasCards exists
        if (typeof CanvasCards === 'undefined') {
            alert('Campaign canvas is not available. Please navigate to the Campaign panel first.');
            return;
        }

        // Add card using CanvasCards module with SRD monster data
        CanvasCards.addCard('monster', {
            id: 'srd-monster-' + Date.now(),
            name: this.selectedMonster.name,
            ...this.selectedMonster
        });

        this.closeMonsterModal();

        // Switch to campaign panel
        if (typeof SidebarController !== 'undefined') {
            SidebarController.switchPanel('campaign');
        }
    },

    addMonsterToVTT() {
        if (!this.selectedMonster || typeof VTTManager === 'undefined') return;

        // Create token data from monster
        const tokenData = {
            id: 'srd-token-' + Date.now(),
            name: this.selectedMonster.name,
            hp: this.selectedMonster.hp,
            maxHp: this.selectedMonster.hp,
            ac: this.selectedMonster.ac,
            type: 'monster',
            color: '#8b0000',
            monster: this.selectedMonster
        };

        VTTManager.addToken(tokenData);
        this.closeMonsterModal();

        // Switch to VTT panel
        if (typeof SidebarController !== 'undefined') {
            SidebarController.switchPanel('vtt');
        }
    },

    // Spells rendering
    filterSpells(spells) {
        return spells.filter(s => {
            if (this.currentSearch && !s.name.toLowerCase().includes(this.currentSearch)) {
                return false;
            }
            if (this.currentFilters.level !== undefined && this.currentFilters.level !== '' &&
                String(s.level) !== String(this.currentFilters.level)) {
                return false;
            }
            if (this.currentFilters.school && s.school.toLowerCase() !== this.currentFilters.school) {
                return false;
            }
            if (this.currentFilters.class && !s.classes.includes(this.currentFilters.class)) {
                return false;
            }
            return true;
        });
    },

    renderSpells() {
        const container = document.getElementById('srd-spells-list');
        if (!container) return;

        const spells = this.filterSpells(this.getAllSpells());

        if (spells.length === 0) {
            container.innerHTML = '<div class="srd-empty">No spells found matching your criteria.</div>';
            return;
        }

        // Sort by level, then alphabetically
        spells.sort((a, b) => {
            if (a.level !== b.level) return a.level - b.level;
            return a.name.localeCompare(b.name);
        });

        container.innerHTML = spells.map(s => this.renderSpellEntry(s)).join('');
    },

    renderSpellEntry(spell) {
        const levelText = spell.level === 0 ? 'Cantrip' : `${this.getOrdinal(spell.level)} Level`;
        const customBadge = spell.isCustom ? '<span class="srd-badge srd-badge-custom">Custom</span>' : '';

        return `
            <div class="srd-entry srd-spell-entry" onclick="this.classList.toggle('expanded')">
                <div class="srd-entry-header">
                    <div class="srd-entry-title">
                        <h3>${spell.name}</h3>
                        ${customBadge}
                    </div>
                    <div class="srd-entry-meta">
                        <span class="srd-meta-level">${levelText}</span>
                        <span class="srd-meta-school">${this.capitalize(spell.school)}</span>
                    </div>
                </div>
                <div class="srd-entry-details">
                    <p><strong>Casting Time:</strong> ${spell.castingTime}</p>
                    <p><strong>Range:</strong> ${spell.range}</p>
                    <p><strong>Components:</strong> ${spell.components}</p>
                    <p><strong>Duration:</strong> ${spell.duration}</p>
                    <p><strong>Classes:</strong> ${spell.classes.join(', ')}</p>
                    <p class="srd-spell-description">${spell.description}</p>
                </div>
            </div>
        `;
    },

    getOrdinal(n) {
        const suffixes = ['th', 'st', 'nd', 'rd'];
        const v = n % 100;
        return n + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
    },

    // Items rendering
    filterItems(items) {
        return items.filter(i => {
            if (this.currentSearch && !i.name.toLowerCase().includes(this.currentSearch)) {
                return false;
            }
            if (this.currentFilters.type && !i.type.toLowerCase().includes(this.currentFilters.type.toLowerCase())) {
                return false;
            }
            if (this.currentFilters.rarity && i.rarity !== this.currentFilters.rarity) {
                return false;
            }
            return true;
        });
    },

    renderItems() {
        const container = document.getElementById('srd-items-list');
        if (!container) return;

        const items = this.filterItems(this.getAllItems());

        if (items.length === 0) {
            container.innerHTML = '<div class="srd-empty">No items found matching your criteria.</div>';
            return;
        }

        // Sort alphabetically
        items.sort((a, b) => a.name.localeCompare(b.name));

        container.innerHTML = items.map(i => this.renderItemEntry(i)).join('');
    },

    renderItemEntry(item) {
        const customBadge = item.isCustom ? '<span class="srd-badge srd-badge-custom">Custom</span>' : '';
        const attunement = item.requiresAttunement ?
            (typeof item.requiresAttunement === 'string' ? `(requires attunement ${item.requiresAttunement})` : '(requires attunement)') : '';

        return `
            <div class="srd-entry srd-item-entry" onclick="this.classList.toggle('expanded')">
                <div class="srd-entry-header">
                    <div class="srd-entry-title">
                        <h3>${item.name}</h3>
                        ${customBadge}
                    </div>
                    <div class="srd-entry-meta">
                        <span class="srd-meta-type">${item.type}</span>
                        <span class="srd-meta-rarity srd-rarity-${item.rarity.toLowerCase().replace(' ', '-')}">${item.rarity}</span>
                    </div>
                </div>
                <div class="srd-entry-details">
                    ${attunement ? `<p><em>${attunement}</em></p>` : ''}
                    <p>${item.description}</p>
                </div>
            </div>
        `;
    },

    // Classes rendering
    filterClasses(classes) {
        return classes.filter(c => {
            if (this.currentSearch && !c.name.toLowerCase().includes(this.currentSearch)) {
                return false;
            }
            return true;
        });
    },

    renderClasses() {
        const container = document.getElementById('srd-classes-list');
        if (!container) return;

        const classes = this.filterClasses(this.getAllClasses());

        if (classes.length === 0) {
            container.innerHTML = '<div class="srd-empty">No classes found.</div>';
            return;
        }

        container.innerHTML = classes.map(c => this.renderClassEntry(c)).join('');
    },

    renderClassEntry(cls) {
        const customBadge = cls.isCustom ? '<span class="srd-badge srd-badge-custom">Custom</span>' : '';

        let subclassesHtml = '';
        if (cls.subclasses && cls.subclasses.length) {
            subclassesHtml = `
                <div class="srd-subclasses">
                    <h4>Subclasses</h4>
                    ${cls.subclasses.map(sc => `
                        <div class="srd-subclass">
                            <h5>${sc.name}</h5>
                            <p>${sc.description}</p>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        return `
            <div class="srd-entry srd-class-entry" onclick="this.classList.toggle('expanded')">
                <div class="srd-entry-header">
                    <div class="srd-entry-title">
                        <h3>${cls.name}</h3>
                        ${customBadge}
                    </div>
                    <div class="srd-entry-meta">
                        <span class="srd-meta-die">Hit Die: ${cls.hitDie}</span>
                        <span class="srd-meta-ability">${cls.primaryAbility}</span>
                    </div>
                </div>
                <div class="srd-entry-details">
                    <p><strong>Saving Throws:</strong> ${cls.savingThrows.join(', ')}</p>
                    <p><strong>Armor:</strong> ${cls.armorProficiencies.join(', ')}</p>
                    <p><strong>Weapons:</strong> ${cls.weaponProficiencies.join(', ')}</p>
                    ${cls.toolProficiencies ? `<p><strong>Tools:</strong> ${cls.toolProficiencies}</p>` : ''}
                    <p><strong>Skills:</strong> Choose ${cls.numSkillChoices} from ${Array.isArray(cls.skillChoices) ? cls.skillChoices.join(', ') : cls.skillChoices}</p>

                    <div class="srd-class-features">
                        <h4>Features</h4>
                        <div class="srd-features-list">
                            ${cls.features.map(f => `
                                <div class="srd-feature">
                                    <strong>Level ${f.level}: ${f.name}</strong>
                                    <p>${f.description}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    ${subclassesHtml}
                </div>
            </div>
        `;
    },

    // Custom entry handling
    addCustom() {
        const modal = document.getElementById('srd-custom-modal');
        const title = document.getElementById('srd-custom-modal-title');
        const body = document.getElementById('srd-custom-modal-body');

        title.textContent = `Add Custom ${this.capitalize(this.currentTab.slice(0, -1))}`;
        body.innerHTML = this.getCustomEntryForm();
        modal.classList.remove('hidden');
    },

    getCustomEntryForm() {
        switch (this.currentTab) {
            case 'monsters':
                return `
                    <div class="edit-section">
                        <div class="edit-row">
                            <label for="custom-name">Name</label>
                            <input type="text" id="custom-name" required>
                        </div>
                        <div class="edit-row-group">
                            <div class="edit-row">
                                <label for="custom-size">Size</label>
                                <select id="custom-size">
                                    <option value="tiny">Tiny</option>
                                    <option value="small">Small</option>
                                    <option value="medium" selected>Medium</option>
                                    <option value="large">Large</option>
                                    <option value="huge">Huge</option>
                                    <option value="gargantuan">Gargantuan</option>
                                </select>
                            </div>
                            <div class="edit-row">
                                <label for="custom-type">Type</label>
                                <select id="custom-type">
                                    <option value="aberration">Aberration</option>
                                    <option value="beast">Beast</option>
                                    <option value="celestial">Celestial</option>
                                    <option value="construct">Construct</option>
                                    <option value="dragon">Dragon</option>
                                    <option value="elemental">Elemental</option>
                                    <option value="fey">Fey</option>
                                    <option value="fiend">Fiend</option>
                                    <option value="giant">Giant</option>
                                    <option value="humanoid" selected>Humanoid</option>
                                    <option value="monstrosity">Monstrosity</option>
                                    <option value="ooze">Ooze</option>
                                    <option value="plant">Plant</option>
                                    <option value="undead">Undead</option>
                                </select>
                            </div>
                        </div>
                        <div class="edit-row-group">
                            <div class="edit-row">
                                <label for="custom-ac">AC</label>
                                <input type="number" id="custom-ac" value="10" min="1" max="30">
                            </div>
                            <div class="edit-row">
                                <label for="custom-hp">HP</label>
                                <input type="number" id="custom-hp" value="10" min="1">
                            </div>
                            <div class="edit-row">
                                <label for="custom-cr">CR</label>
                                <input type="text" id="custom-cr" value="1">
                            </div>
                        </div>
                        <div class="edit-row">
                            <label for="custom-speed">Speed</label>
                            <input type="text" id="custom-speed" value="30 ft.">
                        </div>
                        <div class="edit-abilities">
                            <div class="edit-ability">
                                <label for="custom-str">STR</label>
                                <input type="number" id="custom-str" value="10" min="1" max="30">
                            </div>
                            <div class="edit-ability">
                                <label for="custom-dex">DEX</label>
                                <input type="number" id="custom-dex" value="10" min="1" max="30">
                            </div>
                            <div class="edit-ability">
                                <label for="custom-con">CON</label>
                                <input type="number" id="custom-con" value="10" min="1" max="30">
                            </div>
                            <div class="edit-ability">
                                <label for="custom-int">INT</label>
                                <input type="number" id="custom-int" value="10" min="1" max="30">
                            </div>
                            <div class="edit-ability">
                                <label for="custom-wis">WIS</label>
                                <input type="number" id="custom-wis" value="10" min="1" max="30">
                            </div>
                            <div class="edit-ability">
                                <label for="custom-cha">CHA</label>
                                <input type="number" id="custom-cha" value="10" min="1" max="30">
                            </div>
                        </div>
                    </div>
                `;
            case 'spells':
                return `
                    <div class="edit-section">
                        <div class="edit-row">
                            <label for="custom-name">Name</label>
                            <input type="text" id="custom-name" required>
                        </div>
                        <div class="edit-row-group">
                            <div class="edit-row">
                                <label for="custom-level">Level</label>
                                <select id="custom-level">
                                    <option value="0">Cantrip</option>
                                    <option value="1" selected>1st</option>
                                    <option value="2">2nd</option>
                                    <option value="3">3rd</option>
                                    <option value="4">4th</option>
                                    <option value="5">5th</option>
                                    <option value="6">6th</option>
                                    <option value="7">7th</option>
                                    <option value="8">8th</option>
                                    <option value="9">9th</option>
                                </select>
                            </div>
                            <div class="edit-row">
                                <label for="custom-school">School</label>
                                <select id="custom-school">
                                    <option value="abjuration">Abjuration</option>
                                    <option value="conjuration">Conjuration</option>
                                    <option value="divination">Divination</option>
                                    <option value="enchantment">Enchantment</option>
                                    <option value="evocation" selected>Evocation</option>
                                    <option value="illusion">Illusion</option>
                                    <option value="necromancy">Necromancy</option>
                                    <option value="transmutation">Transmutation</option>
                                </select>
                            </div>
                        </div>
                        <div class="edit-row">
                            <label for="custom-casting-time">Casting Time</label>
                            <input type="text" id="custom-casting-time" value="1 action">
                        </div>
                        <div class="edit-row">
                            <label for="custom-range">Range</label>
                            <input type="text" id="custom-range" value="60 feet">
                        </div>
                        <div class="edit-row">
                            <label for="custom-components">Components</label>
                            <input type="text" id="custom-components" value="V, S">
                        </div>
                        <div class="edit-row">
                            <label for="custom-duration">Duration</label>
                            <input type="text" id="custom-duration" value="Instantaneous">
                        </div>
                        <div class="edit-row">
                            <label for="custom-description">Description</label>
                            <textarea id="custom-description" rows="4"></textarea>
                        </div>
                    </div>
                `;
            case 'items':
                return `
                    <div class="edit-section">
                        <div class="edit-row">
                            <label for="custom-name">Name</label>
                            <input type="text" id="custom-name" required>
                        </div>
                        <div class="edit-row-group">
                            <div class="edit-row">
                                <label for="custom-type">Type</label>
                                <select id="custom-type">
                                    <option value="Weapon">Weapon</option>
                                    <option value="Armor">Armor</option>
                                    <option value="Wondrous Item" selected>Wondrous Item</option>
                                    <option value="Ring">Ring</option>
                                    <option value="Potion">Potion</option>
                                    <option value="Wand">Wand</option>
                                    <option value="Staff">Staff</option>
                                </select>
                            </div>
                            <div class="edit-row">
                                <label for="custom-rarity">Rarity</label>
                                <select id="custom-rarity">
                                    <option value="Common">Common</option>
                                    <option value="Uncommon" selected>Uncommon</option>
                                    <option value="Rare">Rare</option>
                                    <option value="Very Rare">Very Rare</option>
                                    <option value="Legendary">Legendary</option>
                                </select>
                            </div>
                        </div>
                        <div class="edit-row">
                            <label>
                                <input type="checkbox" id="custom-attunement">
                                Requires Attunement
                            </label>
                        </div>
                        <div class="edit-row">
                            <label for="custom-description">Description</label>
                            <textarea id="custom-description" rows="4"></textarea>
                        </div>
                    </div>
                `;
            default:
                return '<p>Custom entries not supported for this type.</p>';
        }
    },

    closeCustomModal() {
        document.getElementById('srd-custom-modal').classList.add('hidden');
    },

    saveCustomEntry() {
        const name = document.getElementById('custom-name')?.value?.trim();
        if (!name) {
            alert('Please enter a name.');
            return;
        }

        let entry;
        switch (this.currentTab) {
            case 'monsters':
                entry = {
                    name,
                    size: document.getElementById('custom-size').value,
                    type: document.getElementById('custom-type').value,
                    alignment: 'neutral',
                    ac: parseInt(document.getElementById('custom-ac').value) || 10,
                    hp: parseInt(document.getElementById('custom-hp').value) || 10,
                    cr: document.getElementById('custom-cr').value || '1',
                    speed: document.getElementById('custom-speed').value || '30 ft.',
                    str: parseInt(document.getElementById('custom-str').value) || 10,
                    dex: parseInt(document.getElementById('custom-dex').value) || 10,
                    con: parseInt(document.getElementById('custom-con').value) || 10,
                    int: parseInt(document.getElementById('custom-int').value) || 10,
                    wis: parseInt(document.getElementById('custom-wis').value) || 10,
                    cha: parseInt(document.getElementById('custom-cha').value) || 10,
                    senses: 'passive Perception 10',
                    languages: 'Common',
                    traits: [],
                    actions: [],
                    source: 'Custom'
                };
                this.customEntries.monsters.push(entry);
                break;
            case 'spells':
                entry = {
                    name,
                    level: parseInt(document.getElementById('custom-level').value),
                    school: document.getElementById('custom-school').value,
                    castingTime: document.getElementById('custom-casting-time').value,
                    range: document.getElementById('custom-range').value,
                    components: document.getElementById('custom-components').value,
                    duration: document.getElementById('custom-duration').value,
                    description: document.getElementById('custom-description').value,
                    classes: [],
                    source: 'Custom'
                };
                this.customEntries.spells.push(entry);
                break;
            case 'items':
                entry = {
                    name,
                    type: document.getElementById('custom-type').value,
                    rarity: document.getElementById('custom-rarity').value,
                    requiresAttunement: document.getElementById('custom-attunement').checked,
                    description: document.getElementById('custom-description').value,
                    source: 'Custom'
                };
                this.customEntries.items.push(entry);
                break;
            default:
                return;
        }

        this.saveCustomEntries();
        this.closeCustomModal();
        this.renderContent();
    }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    SRDPanel.init();
});
