/**
 * Sidebar Navigation Controller
 * Handles panel switching and sidebar collapse for the DM Toolkit
 */

const Sidebar = {
    currentPanel: 'monster',
    isCollapsed: false,

    init() {
        this.sidebar = document.getElementById('sidebar');
        this.toggleBtn = document.getElementById('sidebar-toggle');
        this.navItems = document.querySelectorAll('.nav-item[data-panel]');
        this.panels = document.querySelectorAll('.generator-panel');

        this.bindEvents();
        this.loadState();
    },

    bindEvents() {
        // Panel switching
        this.navItems.forEach(item => {
            item.addEventListener('click', () => {
                const panel = item.dataset.panel;
                this.switchPanel(panel);
            });
        });

        // Sidebar toggle
        if (this.toggleBtn) {
            this.toggleBtn.addEventListener('click', () => {
                this.toggleSidebar();
            });
        }

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            // Alt + number to switch panels
            if (e.altKey && e.key >= '1' && e.key <= '7') {
                const index = parseInt(e.key) - 1;
                const panelKeys = ['monster', 'npc', 'loot', 'hooks', 'location', 'item', 'campaign'];
                if (panelKeys[index]) {
                    this.switchPanel(panelKeys[index]);
                    e.preventDefault();
                }
            }
            // Alt + B to toggle sidebar
            if (e.altKey && e.key.toLowerCase() === 'b') {
                this.toggleSidebar();
                e.preventDefault();
            }
        });
    },

    switchPanel(panelId) {
        if (this.currentPanel === panelId) return;

        // Update nav items
        this.navItems.forEach(item => {
            item.classList.toggle('active', item.dataset.panel === panelId);
        });

        // Update panels
        this.panels.forEach(panel => {
            const isTarget = panel.id === `panel-${panelId}`;
            panel.classList.toggle('active', isTarget);
        });

        this.currentPanel = panelId;
        this.saveState();

        // Dispatch custom event for other modules to react
        document.dispatchEvent(new CustomEvent('panelchange', {
            detail: { panel: panelId }
        }));
    },

    toggleSidebar() {
        this.isCollapsed = !this.isCollapsed;
        this.sidebar.classList.toggle('collapsed', this.isCollapsed);
        document.querySelector('.main-content')?.classList.toggle('sidebar-collapsed', this.isCollapsed);
        this.saveState();
    },

    saveState() {
        try {
            localStorage.setItem('dmtk_sidebar', JSON.stringify({
                currentPanel: this.currentPanel,
                isCollapsed: this.isCollapsed
            }));
        } catch (e) {
            // localStorage not available
        }
    },

    loadState() {
        try {
            const state = JSON.parse(localStorage.getItem('dmtk_sidebar'));
            if (state) {
                if (state.currentPanel) {
                    this.switchPanel(state.currentPanel);
                }
                if (state.isCollapsed) {
                    this.isCollapsed = true;
                    this.sidebar.classList.add('collapsed');
                    document.querySelector('.main-content')?.classList.add('sidebar-collapsed');
                }
            }
        } catch (e) {
            // localStorage not available or invalid JSON
        }
    },

    // Public method to programmatically switch panels
    goTo(panelId) {
        this.switchPanel(panelId);
    }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    Sidebar.init();
});
