/**
 * VTT IndexedDB Storage Manager
 * Provides high-capacity storage for VTT maps, tokens, and images
 * Replaces localStorage with IndexedDB for better storage limits (50MB+)
 */

const VTTStorage = {
    dbName: 'dmtk_vtt_db',
    dbVersion: 1,
    db: null,
    isReady: false,
    readyCallbacks: [],

    /**
     * Initialize the IndexedDB database
     */
    async init() {
        if (this.db) {
            return Promise.resolve(this.db);
        }

        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.dbName, this.dbVersion);

            request.onerror = (event) => {
                console.error('IndexedDB error:', event.target.error);
                reject(event.target.error);
            };

            request.onsuccess = (event) => {
                this.db = event.target.result;
                this.isReady = true;
                console.log('VTT IndexedDB initialized successfully');

                // Run any queued callbacks
                this.readyCallbacks.forEach(cb => cb());
                this.readyCallbacks = [];

                resolve(this.db);
            };

            request.onupgradeneeded = (event) => {
                const db = event.target.result;

                // Maps store - stores map metadata and state
                if (!db.objectStoreNames.contains('maps')) {
                    const mapsStore = db.createObjectStore('maps', { keyPath: 'id' });
                    mapsStore.createIndex('name', 'name', { unique: false });
                }

                // Map images store - stores background images as blobs
                if (!db.objectStoreNames.contains('mapImages')) {
                    db.createObjectStore('mapImages', { keyPath: 'mapId' });
                }

                // Token templates store - saved custom tokens
                if (!db.objectStoreNames.contains('tokenTemplates')) {
                    const tokensStore = db.createObjectStore('tokenTemplates', { keyPath: 'id' });
                    tokensStore.createIndex('name', 'name', { unique: false });
                }

                // Token images store - stores token images as blobs
                if (!db.objectStoreNames.contains('tokenImages')) {
                    db.createObjectStore('tokenImages', { keyPath: 'tokenId' });
                }

                // Settings store - misc settings
                if (!db.objectStoreNames.contains('settings')) {
                    db.createObjectStore('settings', { keyPath: 'key' });
                }

                console.log('VTT IndexedDB schema created');
            };
        });
    },

    /**
     * Wait for database to be ready
     */
    onReady(callback) {
        if (this.isReady) {
            callback();
        } else {
            this.readyCallbacks.push(callback);
        }
    },

    /**
     * Convert base64 data URL to Blob
     */
    base64ToBlob(base64) {
        if (!base64 || !base64.startsWith('data:')) {
            return null;
        }

        try {
            const parts = base64.split(',');
            const mime = parts[0].match(/:(.*?);/)[1];
            const bstr = atob(parts[1]);
            let n = bstr.length;
            const u8arr = new Uint8Array(n);
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
            }
            return new Blob([u8arr], { type: mime });
        } catch (e) {
            console.error('Failed to convert base64 to blob:', e);
            return null;
        }
    },

    /**
     * Convert Blob to base64 data URL
     */
    blobToBase64(blob) {
        return new Promise((resolve, reject) => {
            if (!blob) {
                resolve(null);
                return;
            }
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });
    },

    // ==================== MAPS ====================

    /**
     * Save a map (metadata only, image stored separately)
     */
    async saveMap(map) {
        if (!this.db) await this.init();

        // Extract background image to store separately
        const mapData = { ...map };
        const backgroundImage = mapData.background;
        delete mapData.background; // Don't store in map object
        mapData.hasBackground = !!backgroundImage;

        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(['maps', 'mapImages'], 'readwrite');

            transaction.onerror = (e) => reject(e.target.error);
            transaction.oncomplete = () => resolve();

            // Save map metadata
            const mapsStore = transaction.objectStore('maps');
            mapsStore.put(mapData);

            // Save background image if present
            if (backgroundImage) {
                const imagesStore = transaction.objectStore('mapImages');
                const blob = this.base64ToBlob(backgroundImage);
                imagesStore.put({
                    mapId: map.id,
                    image: blob || backgroundImage // Store blob or fallback to base64
                });
            }
        });
    },

    /**
     * Save multiple maps at once
     */
    async saveMaps(maps) {
        for (const map of maps) {
            await this.saveMap(map);
        }
    },

    /**
     * Load a single map with its background image
     */
    async loadMap(mapId) {
        if (!this.db) await this.init();

        return new Promise(async (resolve, reject) => {
            const transaction = this.db.transaction(['maps', 'mapImages'], 'readonly');

            const mapsStore = transaction.objectStore('maps');
            const mapRequest = mapsStore.get(mapId);

            mapRequest.onsuccess = async () => {
                const map = mapRequest.result;
                if (!map) {
                    resolve(null);
                    return;
                }

                // Load background image if it exists
                if (map.hasBackground) {
                    const imagesStore = transaction.objectStore('mapImages');
                    const imageRequest = imagesStore.get(mapId);

                    imageRequest.onsuccess = async () => {
                        const imageData = imageRequest.result;
                        if (imageData && imageData.image) {
                            // Convert blob back to base64 for compatibility
                            if (imageData.image instanceof Blob) {
                                map.background = await this.blobToBase64(imageData.image);
                            } else {
                                map.background = imageData.image;
                            }
                        }
                        resolve(map);
                    };

                    imageRequest.onerror = () => {
                        // Still return map even if image fails
                        resolve(map);
                    };
                } else {
                    resolve(map);
                }
            };

            mapRequest.onerror = (e) => reject(e.target.error);
        });
    },

    /**
     * Load all maps (metadata only for list display)
     */
    async loadAllMaps() {
        if (!this.db) await this.init();

        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(['maps'], 'readonly');
            const store = transaction.objectStore('maps');
            const request = store.getAll();

            request.onsuccess = () => {
                resolve(request.result || []);
            };

            request.onerror = (e) => reject(e.target.error);
        });
    },

    /**
     * Load all maps with their background images
     */
    async loadAllMapsWithImages() {
        const maps = await this.loadAllMaps();
        const fullMaps = [];

        for (const map of maps) {
            const fullMap = await this.loadMap(map.id);
            fullMaps.push(fullMap);
        }

        return fullMaps;
    },

    /**
     * Delete a map and its image
     */
    async deleteMap(mapId) {
        if (!this.db) await this.init();

        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(['maps', 'mapImages'], 'readwrite');

            transaction.onerror = (e) => reject(e.target.error);
            transaction.oncomplete = () => resolve();

            transaction.objectStore('maps').delete(mapId);
            transaction.objectStore('mapImages').delete(mapId);
        });
    },

    // ==================== TOKEN TEMPLATES ====================

    /**
     * Save a token template
     */
    async saveTokenTemplate(token) {
        if (!this.db) await this.init();

        const tokenData = { ...token };
        const tokenImage = tokenData.image;
        delete tokenData.image;
        tokenData.hasImage = !!tokenImage;

        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(['tokenTemplates', 'tokenImages'], 'readwrite');

            transaction.onerror = (e) => reject(e.target.error);
            transaction.oncomplete = () => resolve();

            transaction.objectStore('tokenTemplates').put(tokenData);

            if (tokenImage) {
                const blob = this.base64ToBlob(tokenImage);
                transaction.objectStore('tokenImages').put({
                    tokenId: token.id,
                    image: blob || tokenImage
                });
            }
        });
    },

    /**
     * Save multiple token templates
     */
    async saveTokenTemplates(tokens) {
        for (const token of tokens) {
            await this.saveTokenTemplate(token);
        }
    },

    /**
     * Load a token template with its image
     */
    async loadTokenTemplate(tokenId) {
        if (!this.db) await this.init();

        return new Promise(async (resolve, reject) => {
            const transaction = this.db.transaction(['tokenTemplates', 'tokenImages'], 'readonly');

            const tokensStore = transaction.objectStore('tokenTemplates');
            const tokenRequest = tokensStore.get(tokenId);

            tokenRequest.onsuccess = async () => {
                const token = tokenRequest.result;
                if (!token) {
                    resolve(null);
                    return;
                }

                if (token.hasImage) {
                    const imagesStore = transaction.objectStore('tokenImages');
                    const imageRequest = imagesStore.get(tokenId);

                    imageRequest.onsuccess = async () => {
                        const imageData = imageRequest.result;
                        if (imageData && imageData.image) {
                            if (imageData.image instanceof Blob) {
                                token.image = await this.blobToBase64(imageData.image);
                            } else {
                                token.image = imageData.image;
                            }
                        }
                        resolve(token);
                    };

                    imageRequest.onerror = () => resolve(token);
                } else {
                    resolve(token);
                }
            };

            tokenRequest.onerror = (e) => reject(e.target.error);
        });
    },

    /**
     * Load all token templates with images
     */
    async loadAllTokenTemplates() {
        if (!this.db) await this.init();

        return new Promise(async (resolve, reject) => {
            const transaction = this.db.transaction(['tokenTemplates'], 'readonly');
            const store = transaction.objectStore('tokenTemplates');
            const request = store.getAll();

            request.onsuccess = async () => {
                const tokens = request.result || [];
                const fullTokens = [];

                for (const token of tokens) {
                    const fullToken = await this.loadTokenTemplate(token.id);
                    if (fullToken) fullTokens.push(fullToken);
                }

                resolve(fullTokens);
            };

            request.onerror = (e) => reject(e.target.error);
        });
    },

    /**
     * Delete a token template and its image
     */
    async deleteTokenTemplate(tokenId) {
        if (!this.db) await this.init();

        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(['tokenTemplates', 'tokenImages'], 'readwrite');

            transaction.onerror = (e) => reject(e.target.error);
            transaction.oncomplete = () => resolve();

            transaction.objectStore('tokenTemplates').delete(tokenId);
            transaction.objectStore('tokenImages').delete(tokenId);
        });
    },

    // ==================== SETTINGS ====================

    /**
     * Save a setting
     */
    async saveSetting(key, value) {
        if (!this.db) await this.init();

        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(['settings'], 'readwrite');
            const store = transaction.objectStore('settings');

            store.put({ key, value });

            transaction.oncomplete = () => resolve();
            transaction.onerror = (e) => reject(e.target.error);
        });
    },

    /**
     * Load a setting
     */
    async loadSetting(key, defaultValue = null) {
        if (!this.db) await this.init();

        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction(['settings'], 'readonly');
            const store = transaction.objectStore('settings');
            const request = store.get(key);

            request.onsuccess = () => {
                resolve(request.result ? request.result.value : defaultValue);
            };

            request.onerror = (e) => reject(e.target.error);
        });
    },

    // ==================== MIGRATION ====================

    /**
     * Check if migration from localStorage is needed
     */
    async needsMigration() {
        const migrated = await this.loadSetting('migrated_from_localstorage', false);
        const hasLocalStorageData = localStorage.getItem('dmtk_vtt_maps') !== null;
        return !migrated && hasLocalStorageData;
    },

    /**
     * Migrate data from localStorage to IndexedDB
     */
    async migrateFromLocalStorage() {
        console.log('Starting VTT data migration from localStorage to IndexedDB...');

        try {
            // Migrate maps
            const mapsJson = localStorage.getItem('dmtk_vtt_maps');
            if (mapsJson) {
                const maps = JSON.parse(mapsJson);
                console.log(`Migrating ${maps.length} maps...`);
                await this.saveMaps(maps);
            }

            // Migrate saved tokens
            const tokensJson = localStorage.getItem('dmtk_vtt_saved_tokens');
            if (tokensJson) {
                const tokens = JSON.parse(tokensJson);
                console.log(`Migrating ${tokens.length} token templates...`);
                await this.saveTokenTemplates(tokens);
            }

            // Migrate favorites (keep in localStorage as they're small)
            // Migrate active map setting
            const activeMap = localStorage.getItem('dmtk_vtt_active');
            if (activeMap) {
                await this.saveSetting('activeMap', activeMap);
            }

            // Migrate settings
            const settingsJson = localStorage.getItem('dmtk_vtt_settings');
            if (settingsJson) {
                const settings = JSON.parse(settingsJson);
                await this.saveSetting('vttSettings', settings);
            }

            // Mark as migrated
            await this.saveSetting('migrated_from_localstorage', true);

            // Clear old localStorage data (optional - keep for now as backup)
            // localStorage.removeItem('dmtk_vtt_maps');
            // localStorage.removeItem('dmtk_vtt_saved_tokens');

            console.log('VTT data migration completed successfully!');
            return true;
        } catch (e) {
            console.error('Migration failed:', e);
            return false;
        }
    },

    // ==================== STORAGE INFO ====================

    /**
     * Get storage usage estimate
     */
    async getStorageEstimate() {
        if (navigator.storage && navigator.storage.estimate) {
            const estimate = await navigator.storage.estimate();
            return {
                used: estimate.usage,
                quota: estimate.quota,
                usedMB: (estimate.usage / (1024 * 1024)).toFixed(2),
                quotaMB: (estimate.quota / (1024 * 1024)).toFixed(2),
                percentUsed: ((estimate.usage / estimate.quota) * 100).toFixed(1)
            };
        }
        return null;
    },

    /**
     * Clear all VTT data from IndexedDB
     */
    async clearAllData() {
        if (!this.db) await this.init();

        const stores = ['maps', 'mapImages', 'tokenTemplates', 'tokenImages', 'settings'];

        for (const storeName of stores) {
            await new Promise((resolve, reject) => {
                const transaction = this.db.transaction([storeName], 'readwrite');
                const store = transaction.objectStore(storeName);
                const request = store.clear();

                request.onsuccess = () => resolve();
                request.onerror = (e) => reject(e.target.error);
            });
        }

        console.log('All VTT IndexedDB data cleared');
    }
};

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    VTTStorage.init().catch(e => {
        console.error('Failed to initialize VTT IndexedDB:', e);
    });
});
