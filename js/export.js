/**
 * D&D 5e Monster Stat Block Generator - Export Module
 * Handles PNG export using html2canvas
 */

const StatblockExporter = {
    /**
     * Export the statblock as a PNG image
     * @param {HTMLElement} element - The statblock element to export
     * @param {string} filename - Optional filename (without extension)
     * @returns {Promise<void>}
     */
    async exportAsPNG(element, filename = 'statblock') {
        if (!element) {
            console.error('No element provided for export');
            return;
        }

        // Check if html2canvas is available
        if (typeof html2canvas === 'undefined') {
            alert('Export library not loaded. Please check your internet connection and refresh the page.');
            return;
        }

        try {
            // Show loading indicator
            const loadingOverlay = this.showLoadingOverlay();

            // Configure html2canvas options for best quality
            const options = {
                scale: 2, // Higher scale for better quality
                useCORS: true,
                allowTaint: true,
                backgroundColor: null, // Let the element's background show through
                logging: false,
                removeContainer: true,
                // Ensure fonts and styles are rendered correctly
                onclone: (clonedDoc) => {
                    const clonedElement = clonedDoc.querySelector('.statblock');
                    if (clonedElement) {
                        // Ensure proper styling in clone
                        clonedElement.style.transform = 'none';
                        clonedElement.style.boxShadow = 'none';
                        clonedElement.style.opacity = '1';
                        clonedElement.style.background = '#FDF1DC';
                        clonedElement.style.margin = '0';
                        clonedElement.style.animation = 'none';

                        // Ensure all child elements are fully opaque
                        const allElements = clonedElement.querySelectorAll('*');
                        allElements.forEach(el => {
                            el.style.opacity = '1';
                        });
                    }
                }
            };

            // Generate canvas
            const canvas = await html2canvas(element, options);

            // Convert to blob
            canvas.toBlob((blob) => {
                if (!blob) {
                    console.error('Failed to create blob from canvas');
                    this.hideLoadingOverlay(loadingOverlay);
                    return;
                }

                // Create download link
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = `${this.sanitizeFilename(filename)}.png`;

                // Trigger download
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

                // Cleanup
                URL.revokeObjectURL(url);
                this.hideLoadingOverlay(loadingOverlay);
            }, 'image/png', 1.0);

        } catch (error) {
            console.error('Export failed:', error);
            alert('Failed to export statblock. Please try again.');
        }
    },

    /**
     * Export statblock as JSON data
     * @param {object} monsterData - The monster data object
     * @param {string} filename - Optional filename
     */
    exportAsJSON(monsterData, filename = 'monster') {
        if (!monsterData) {
            console.error('No monster data provided for export');
            return;
        }

        try {
            const jsonString = JSON.stringify(monsterData, null, 2);
            const blob = new Blob([jsonString], { type: 'application/json' });
            const url = URL.createObjectURL(blob);

            const link = document.createElement('a');
            link.href = url;
            link.download = `${this.sanitizeFilename(filename)}.json`;

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            URL.revokeObjectURL(url);
        } catch (error) {
            console.error('JSON export failed:', error);
            alert('Failed to export monster data as JSON.');
        }
    },

    /**
     * Copy statblock text to clipboard
     * @param {object} monsterData - The monster data object
     */
    async copyToClipboard(monsterData) {
        if (!monsterData) {
            console.error('No monster data provided');
            return;
        }

        try {
            const text = this.formatAsText(monsterData);
            await navigator.clipboard.writeText(text);
            this.showNotification('Copied to clipboard!');
        } catch (error) {
            console.error('Copy failed:', error);
            // Fallback for older browsers
            this.fallbackCopyToClipboard(this.formatAsText(monsterData));
        }
    },

    /**
     * Format monster data as plain text
     * @param {object} monster - The monster data
     * @returns {string} Formatted text
     */
    formatAsText(monster) {
        const lines = [];

        // Name and basic info
        lines.push(monster.name.toUpperCase());
        lines.push(`${monster.size} ${monster.type}, ${monster.alignment}`);
        lines.push('');

        // Combat stats
        lines.push(`Armor Class ${monster.ac}${monster.acSource ? ` (${monster.acSource})` : ''}`);
        lines.push(`Hit Points ${monster.hp} (${monster.hitDice})`);
        lines.push(`Speed ${this.formatSpeed(monster.speed)}`);
        lines.push('');

        // Ability scores
        lines.push('STR     DEX     CON     INT     WIS     CHA');
        const abilities = ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'];
        const scores = abilities.map(a => {
            const score = monster.abilities[a];
            const mod = Math.floor((score - 10) / 2);
            const modStr = mod >= 0 ? `+${mod}` : `${mod}`;
            return `${score} (${modStr})`.padEnd(8);
        });
        lines.push(scores.join(''));
        lines.push('');

        // Saving throws
        if (monster.savingThrows && monster.savingThrows.length > 0) {
            lines.push(`Saving Throws ${monster.savingThrows.join(', ')}`);
        }

        // Skills
        if (monster.skills && monster.skills.length > 0) {
            lines.push(`Skills ${monster.skills.join(', ')}`);
        }

        // Damage resistances/immunities
        if (monster.damageResistances && monster.damageResistances.length > 0) {
            lines.push(`Damage Resistances ${monster.damageResistances.join(', ')}`);
        }
        if (monster.damageImmunities && monster.damageImmunities.length > 0) {
            lines.push(`Damage Immunities ${monster.damageImmunities.join(', ')}`);
        }
        if (monster.conditionImmunities && monster.conditionImmunities.length > 0) {
            lines.push(`Condition Immunities ${monster.conditionImmunities.join(', ')}`);
        }

        // Senses
        if (monster.senses) {
            lines.push(`Senses ${monster.senses}`);
        }

        // Languages
        if (monster.languages) {
            lines.push(`Languages ${monster.languages}`);
        }

        // CR
        lines.push(`Challenge ${monster.cr} (${monster.xp} XP)`);
        lines.push('');

        // Traits
        if (monster.traits && monster.traits.length > 0) {
            for (const trait of monster.traits) {
                lines.push(`${trait.name}. ${trait.description}`);
                lines.push('');
            }
        }

        // Actions
        if (monster.actions && monster.actions.length > 0) {
            lines.push('ACTIONS');
            lines.push('');
            for (const action of monster.actions) {
                lines.push(`${action.name}. ${action.description}`);
                lines.push('');
            }
        }

        // Bonus Actions
        if (monster.bonusActions && monster.bonusActions.length > 0) {
            lines.push('BONUS ACTIONS');
            lines.push('');
            for (const action of monster.bonusActions) {
                lines.push(`${action.name}. ${action.description}`);
                lines.push('');
            }
        }

        // Reactions
        if (monster.reactions && monster.reactions.length > 0) {
            lines.push('REACTIONS');
            lines.push('');
            for (const reaction of monster.reactions) {
                lines.push(`${reaction.name}. ${reaction.description}`);
                lines.push('');
            }
        }

        // Legendary Actions
        if (monster.legendaryActions && monster.legendaryActions.length > 0) {
            lines.push('LEGENDARY ACTIONS');
            lines.push('');
            lines.push(monster.legendaryDescription || `The ${monster.name} can take 3 legendary actions, choosing from the options below.`);
            lines.push('');
            for (const action of monster.legendaryActions) {
                lines.push(`${action.name}. ${action.description}`);
                lines.push('');
            }
        }

        // Mythic Actions
        if (monster.mythicTrait) {
            lines.push('MYTHIC TRAIT');
            lines.push('');
            lines.push(`${monster.mythicTrait.name}. ${monster.mythicTrait.description}`);
            lines.push('');
        }

        if (monster.mythicActions && monster.mythicActions.length > 0) {
            lines.push('MYTHIC ACTIONS');
            lines.push('');
            for (const action of monster.mythicActions) {
                lines.push(`${action.name}. ${action.description}`);
                lines.push('');
            }
        }

        // Lair Actions
        if (monster.lairActions && monster.lairActions.length > 0) {
            lines.push('LAIR ACTIONS');
            lines.push('');
            lines.push('On initiative count 20 (losing initiative ties), the creature can use one of the following lair actions:');
            lines.push('');
            for (const action of monster.lairActions) {
                lines.push(`• ${action.description || action}`);
            }
            lines.push('');
        }

        return lines.join('\n');
    },

    /**
     * Format speed object as string
     * @param {object|string} speed - Speed data
     * @returns {string} Formatted speed
     */
    formatSpeed(speed) {
        if (typeof speed === 'string') return speed;
        if (!speed) return '30 ft.';

        const parts = [];
        if (speed.walk) parts.push(`${speed.walk} ft.`);
        if (speed.fly) parts.push(`fly ${speed.fly} ft.${speed.hover ? ' (hover)' : ''}`);
        if (speed.swim) parts.push(`swim ${speed.swim} ft.`);
        if (speed.climb) parts.push(`climb ${speed.climb} ft.`);
        if (speed.burrow) parts.push(`burrow ${speed.burrow} ft.`);

        return parts.join(', ') || '30 ft.';
    },

    /**
     * Sanitize filename for download
     * @param {string} name - Original filename
     * @returns {string} Sanitized filename
     */
    sanitizeFilename(name) {
        return name
            .toLowerCase()
            .replace(/[^a-z0-9]/g, '-')
            .replace(/-+/g, '-')
            .replace(/^-|-$/g, '')
            .substring(0, 100) || 'statblock';
    },

    /**
     * Show loading overlay during export
     * @returns {HTMLElement} The overlay element
     */
    showLoadingOverlay() {
        const overlay = document.createElement('div');
        overlay.className = 'export-loading-overlay';
        overlay.innerHTML = `
            <div class="export-loading-content">
                <div class="export-spinner"></div>
                <p>Generating image...</p>
            </div>
        `;

        // Add styles if not already present
        if (!document.getElementById('export-loading-styles')) {
            const style = document.createElement('style');
            style.id = 'export-loading-styles';
            style.textContent = `
                .export-loading-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.7);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 10000;
                }
                .export-loading-content {
                    background: #1e1e1e;
                    padding: 30px 50px;
                    border-radius: 10px;
                    text-align: center;
                    color: #c9a227;
                }
                .export-spinner {
                    width: 40px;
                    height: 40px;
                    border: 4px solid #333;
                    border-top-color: #c9a227;
                    border-radius: 50%;
                    margin: 0 auto 15px;
                    animation: export-spin 1s linear infinite;
                }
                @keyframes export-spin {
                    to { transform: rotate(360deg); }
                }
            `;
            document.head.appendChild(style);
        }

        document.body.appendChild(overlay);
        return overlay;
    },

    /**
     * Hide loading overlay
     * @param {HTMLElement} overlay - The overlay element to remove
     */
    hideLoadingOverlay(overlay) {
        if (overlay && overlay.parentNode) {
            overlay.parentNode.removeChild(overlay);
        }
    },

    /**
     * Show a notification message
     * @param {string} message - The message to show
     * @param {number} duration - Duration in ms
     */
    showNotification(message, duration = 2000) {
        const notification = document.createElement('div');
        notification.className = 'export-notification';
        notification.textContent = message;

        // Add styles if not already present
        if (!document.getElementById('export-notification-styles')) {
            const style = document.createElement('style');
            style.id = 'export-notification-styles';
            style.textContent = `
                .export-notification {
                    position: fixed;
                    bottom: 20px;
                    left: 50%;
                    transform: translateX(-50%);
                    background: #2d2d2d;
                    color: #c9a227;
                    padding: 12px 24px;
                    border-radius: 6px;
                    border: 1px solid #c9a227;
                    z-index: 10000;
                    animation: notification-fade 0.3s ease;
                }
                @keyframes notification-fade {
                    from { opacity: 0; transform: translateX(-50%) translateY(20px); }
                    to { opacity: 1; transform: translateX(-50%) translateY(0); }
                }
            `;
            document.head.appendChild(style);
        }

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'notification-fade 0.3s ease reverse';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, duration);
    },

    /**
     * Fallback copy method for older browsers
     * @param {string} text - Text to copy
     */
    fallbackCopyToClipboard(text) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.select();

        try {
            document.execCommand('copy');
            this.showNotification('Copied to clipboard!');
        } catch (err) {
            console.error('Fallback copy failed:', err);
            alert('Failed to copy to clipboard.');
        }

        document.body.removeChild(textarea);
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = StatblockExporter;
}
