/**
 * Monster Storage Manager
 * Handles saving, loading, editing, and deleting monsters
 * Uses localStorage for persistence and JSON files for import/export
 */

const MonsterStorage = {
    STORAGE_KEY: 'monsterLibrary',

    /**
     * Get all saved monsters from localStorage
     */
    getLibrary() {
        try {
            const data = localStorage.getItem(this.STORAGE_KEY);
            return data ? JSON.parse(data) : [];
        } catch (e) {
            console.error('Error reading monster library:', e);
            return [];
        }
    },

    /**
     * Save the library to localStorage
     */
    saveLibrary(library) {
        try {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(library));
            return true;
        } catch (e) {
            console.error('Error saving monster library:', e);
            return false;
        }
    },

    /**
     * Save a monster to the library
     */
    saveMonster(monster) {
        const library = this.getLibrary();

        const entry = {
            id: this.generateId(),
            name: monster.name,
            type: monster.type,
            cr: monster.cr,
            savedAt: new Date().toISOString(),
            data: monster
        };

        library.push(entry);

        if (this.saveLibrary(library)) {
            return entry;
        }
        return null;
    },

    /**
     * Update an existing monster in the library
     */
    updateMonster(id, monster) {
        const library = this.getLibrary();
        const index = library.findIndex(m => m.id === id);

        if (index === -1) {
            return false;
        }

        library[index] = {
            ...library[index],
            name: monster.name,
            type: monster.type,
            cr: monster.cr,
            updatedAt: new Date().toISOString(),
            data: monster
        };

        return this.saveLibrary(library);
    },

    /**
     * Delete a monster from the library
     */
    deleteMonster(id) {
        const library = this.getLibrary();
        const filtered = library.filter(m => m.id !== id);

        if (filtered.length === library.length) {
            return false; // Nothing was deleted
        }

        return this.saveLibrary(filtered);
    },

    /**
     * Get a specific monster by ID
     */
    getMonster(id) {
        const library = this.getLibrary();
        const entry = library.find(m => m.id === id);
        return entry ? entry.data : null;
    },

    /**
     * Get a library entry by ID (includes metadata)
     */
    getEntry(id) {
        const library = this.getLibrary();
        return library.find(m => m.id === id) || null;
    },

    /**
     * Export a monster as a JSON file download
     */
    exportMonster(monster) {
        const dataStr = JSON.stringify(monster, null, 2);
        const blob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = `${this.sanitizeFilename(monster.name)}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    },

    /**
     * Export entire library as a JSON file
     */
    exportLibrary() {
        const library = this.getLibrary();
        if (library.length === 0) {
            alert('No monsters saved to export.');
            return;
        }

        const dataStr = JSON.stringify(library, null, 2);
        const blob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = `monster-library-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    },

    /**
     * Import a monster from a JSON file
     * Returns a promise that resolves with the monster data
     */
    importMonster(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = (e) => {
                try {
                    const data = JSON.parse(e.target.result);

                    // Check if this is a library export or single monster
                    if (Array.isArray(data)) {
                        // It's a library export
                        resolve({ type: 'library', data: data });
                    } else if (data.name && data.type) {
                        // It's a single monster
                        resolve({ type: 'monster', data: data });
                    } else {
                        reject(new Error('Invalid monster file format'));
                    }
                } catch (err) {
                    reject(new Error('Failed to parse JSON file'));
                }
            };

            reader.onerror = () => reject(new Error('Failed to read file'));
            reader.readAsText(file);
        });
    },

    /**
     * Import multiple monsters from a library export
     */
    importLibrary(libraryData) {
        const currentLibrary = this.getLibrary();
        let imported = 0;

        for (const entry of libraryData) {
            // Generate new IDs to avoid conflicts
            const newEntry = {
                id: this.generateId(),
                name: entry.name || entry.data?.name || 'Unknown',
                type: entry.type || entry.data?.type || 'unknown',
                cr: entry.cr || entry.data?.cr || 0,
                savedAt: new Date().toISOString(),
                data: entry.data || entry
            };
            currentLibrary.push(newEntry);
            imported++;
        }

        if (this.saveLibrary(currentLibrary)) {
            return imported;
        }
        return 0;
    },

    /**
     * Generate a unique ID
     */
    generateId() {
        return `monster_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    },

    /**
     * Sanitize a filename
     */
    sanitizeFilename(name) {
        return name
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-|-$/g, '');
    },

    /**
     * Get library statistics
     */
    getStats() {
        const library = this.getLibrary();
        const typeCount = {};

        for (const entry of library) {
            const type = entry.type || 'unknown';
            typeCount[type] = (typeCount[type] || 0) + 1;
        }

        return {
            total: library.length,
            byType: typeCount
        };
    },

    /**
     * Clear the entire library
     */
    clearLibrary() {
        return this.saveLibrary([]);
    },

    /**
     * Search monsters by name
     */
    searchMonsters(query) {
        const library = this.getLibrary();
        const lowerQuery = query.toLowerCase();

        return library.filter(entry =>
            entry.name.toLowerCase().includes(lowerQuery)
        );
    },

    /**
     * Filter monsters by type
     */
    filterByType(type) {
        const library = this.getLibrary();
        return library.filter(entry => entry.type === type);
    },

    /**
     * Filter monsters by CR range
     */
    filterByCR(minCR, maxCR) {
        const library = this.getLibrary();
        return library.filter(entry => {
            const cr = parseFloat(entry.cr);
            return cr >= minCR && cr <= maxCR;
        });
    },

    /**
     * Sort library by various criteria
     */
    sortLibrary(criteria = 'name', ascending = true) {
        const library = this.getLibrary();

        library.sort((a, b) => {
            let valueA, valueB;

            switch (criteria) {
                case 'name':
                    valueA = a.name.toLowerCase();
                    valueB = b.name.toLowerCase();
                    break;
                case 'cr':
                    valueA = parseFloat(a.cr);
                    valueB = parseFloat(b.cr);
                    break;
                case 'type':
                    valueA = a.type;
                    valueB = b.type;
                    break;
                case 'date':
                    valueA = new Date(a.savedAt);
                    valueB = new Date(b.savedAt);
                    break;
                default:
                    return 0;
            }

            if (valueA < valueB) return ascending ? -1 : 1;
            if (valueA > valueB) return ascending ? 1 : -1;
            return 0;
        });

        return library;
    }
};
