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

    isMobile() {
        return window.innerWidth <= 768;
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

        // Handle resize - remove collapsed state when switching to mobile
        window.addEventListener('resize', () => {
            if (this.isMobile() && this.isCollapsed) {
                // On mobile, clear collapsed classes (CSS handles the rest)
                this.sidebar.classList.remove('collapsed');
                document.querySelector('.main-content')?.classList.remove('sidebar-collapsed');
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            // Alt + number to switch panels
            if (e.altKey && e.key >= '1' && e.key <= '8') {
                const index = parseInt(e.key) - 1;
                const panelKeys = ['monster', 'npc', 'loot', 'hooks', 'location', 'item', 'campaign', 'vtt'];
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

        // On mobile, collapse tabs after selecting a panel
        if (this.isMobile()) {
            this.sidebar.classList.add('mobile-tabs-collapsed');
        }

        // Dispatch custom event for other modules to react
        document.dispatchEvent(new CustomEvent('panelchange', {
            detail: { panel: panelId }
        }));
    },

    toggleSidebar() {
        if (this.isMobile()) {
            // On mobile, toggle the tabs visibility
            this.sidebar.classList.toggle('mobile-tabs-collapsed');
            return;
        }

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
                // Only apply collapsed state on desktop/tablet, not mobile
                if (state.isCollapsed && !this.isMobile()) {
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
