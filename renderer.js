class PCOrganizer {
    constructor() {
      this.icons = {
        get: (type) => {
          const color = 'currentColor';
          const iconMap = {
            'logo': `<svg viewBox="0 0 24 24"><path fill="${color}" d="M2,6H8L10,4H14L16,6H22V18H2V6M20,16V8H4V16H20M18,14H6V10H18V14Z" /></svg>`,
            'browse': `<svg viewBox="0 0 24 24"><path fill="${color}" d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z" /></svg>`,
            'organize': `<svg viewBox="0 0 24 24"><path fill="${color}" d="M15,23H9V21H15V23M15,1H9V3H15V1M21.82,6.5L19,9.32L17.59,7.91L20.41,5.09L21.82,6.5M7.91,17.59L9.32,19L6.5,21.82L5.09,20.41L7.91,17.59M20.41,21.82L19,19.32L17.59,20.73L20.41,23.55L21.82,22.14M7.91,6.41L5.09,3.59L6.5,2.18L9.32,5L7.91,6.41Z" /></svg>`,
            'settings': `<svg viewBox="0 0 24 24"><path fill="${color}" d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" /></svg>`,
            'loading': `<svg viewBox="0 0 24 24"><path fill="${color}" d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" /></svg>`,
            'history': `<svg viewBox="0 0 24 24"><path fill="${color}" d="M13.5,8H12V13L16.28,15.54L17,14.33L13.5,12.25V8M13,3A9,9 0 0,0 4,12H1L4.96,16.03L9,12H6A7,7 0 0,1 13,5A7,7 0 0,1 20,12A7,7 0 0,1 13,19C11.07,19 9.32,18.21 8.06,16.94L6.64,18.36C8.27,20 10.5,21 13,21A9,9 0 0,0 22,12A9,9 0 0,0 13,3" /></svg>`,
            'undo': `<svg viewBox="0 0 24 24"><path fill="${color}" d="M12.5,8C9.97,8 7.9,10.03 7.9,12.5C7.9,15.03 9.97,17 12.5,17H18V14L22,18L18,22V19H12.5C8.39,19 5,15.61 5,11.5C5,7.39 8.39,4 12.5,4H18V7H16.5C14.28,7 12.5,8.78 12.5,11V8Z" /></svg>`,
            'success': `<svg viewBox="0 0 24 24"><path fill="${color}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" /></svg>`,
            'error': `<svg viewBox="0 0 24 24"><path fill="${color}" d="M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>`,
            'info': `<svg viewBox="0 0 24 24"><path fill="${color}" d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>`,
            'file': `<svg viewBox="0 0 24 24"><path fill="${color}" d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" /></svg>`,
            'folder': `<svg viewBox="0 0 24 24"><path fill="${color}" d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z" /></svg>`,
            'delete': `<svg viewBox="0 0 24 24"><path fill="currentColor" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>`,
            'refresh': `<svg viewBox="0 0 24 24"><path fill="${color}" d="M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z" /></svg>`,
            'themeLight': `<svg viewBox="0 0 24 24"><path fill="${color}" d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.99V2H12.01V4.99H12M19.07,6.35L20.5,4.93L19.07,3.5L17.65,4.93L19.07,6.35M4.93,19.07L3.5,20.5L4.93,21.93L6.35,20.5L4.93,19.07M17.65,19.07L19.07,20.5L20.5,19.07L19.07,17.65L17.65,19.07M2,12.01H4.99V12H2V12.01M19.01,12H22V12.01H19.01V12M6.35,4.93L4.93,3.5L3.5,4.93L4.93,6.35L6.35,4.93Z" /></svg>`,
            'themeDark': `<svg viewBox="0 0 24 24"><path fill="${color}" d="M12,18C11.11,18 10.26,17.8 9.5,17.45C11.56,16.5 13,14.42 13,12C13,9.58 11.56,7.5 9.5,6.55C10.26,6.2 11.11,6 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18Z" /></svg>`,
          };
          return iconMap[type] || iconMap['file'];
        }
      };

      this.currentPath = null;
      this.history = [];
      this.organizationRules = {};
      this.isOrganizing = false;
        
      this.init();
    }
  
    async init() {
        console.log("PCOrganizer: Initializing application...");
        this.createParticles(30);
        this.injectIcons();
        this.initializeTheme();
        this.setupEventListeners();
        await this.loadSettings();
        this.switchView('home');
        console.log("PCOrganizer: Initialization complete.");
    }

    injectIcons() {
        document.getElementById('logo-icon-svg').innerHTML = this.icons.get('logo');
        document.getElementById('browse-folder-icon').innerHTML = this.icons.get('browse');
        document.getElementById('browse-folder-icon-small').innerHTML = this.icons.get('browse');
        document.getElementById('custom-rules-icon').innerHTML = this.icons.get('settings');
        document.getElementById('prompt-folder-icon').innerHTML = this.icons.get('folder');
        document.getElementById('organize-now-icon').innerHTML = this.icons.get('organize');
        document.getElementById('refresh-btn').innerHTML = this.icons.get('refresh');
        document.getElementById('clear-history-icon').innerHTML = this.icons.get('delete');
        document.getElementById('theme-toggle').innerHTML = this.icons.get(document.body.dataset.theme === 'light' ? 'themeDark' : 'themeLight');
    }

    async loadSettings(forceDefaults = false) {
        let settings = forceDefaults ? null : await window.electronAPI.getSettings();
        if (!settings || !settings.organizationRules) {
            settings = {
                organizationRules: {
                    images: { folderName: 'Images', extensions: ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp'] },
                    videos: { folderName: 'Videos', extensions: ['.mp4', '.mov', '.avi', '.mkv'] },
                    documents: { folderName: 'Documents', extensions: ['.pdf', '.doc', '.docx', '.txt'] },
                    archives: { folderName: 'Archives', extensions: ['.zip', '.rar', '.7z'] },
                }
            };
        }
        this.organizationRules = settings.organizationRules;
        this.renderSettingsPage();
    }
    
    async saveSettings() {
        await window.electronAPI.saveSettings({ organizationRules: this.organizationRules, history: this.history });
    }
    
    async resetSettings() {
        const confirmed = await this.showConfirmation('Reset Settings?', 'Are you sure you want to reset all rules to their default values? This action cannot be undone.');
        if (confirmed) {
            await this.loadSettings(true);
            await this.saveSettings();
            this.renderSettingsPage();
            this.showToast('Success', 'Settings have been reset to defaults.', 'success');
        }
    }
    
    async organizeCurrentDirectory() {
        if (!this.currentPath) return this.showToast('Error', 'Please select a folder first.', 'error');
        if (this.isOrganizing) return;
        
        this.isOrganizing = true;
        this.toggleOrganizeLoading(true);

        try {
            const items = await window.electronAPI.readDirectory(this.currentPath);
            const files = items.filter(item => !item.isDirectory);
            const moveOperations = [];
            const movedCategories = new Set();

            for (const file of files) {
                const { category, targetFolder } = await this.categorizeFile(file.name);
                if (!category) continue;

                await window.electronAPI.createDirectory(targetFolder);
                const newPath = await window.electronAPI.pathJoin(targetFolder, file.name);

                if (file.path.toLowerCase() !== newPath.toLowerCase()) {
                    await window.electronAPI.moveFile(file.path, newPath);
                    moveOperations.push({ from: file.path, to: newPath });
                    movedCategories.add(this.organizationRules[category].folderName);
                }
            }
            
            if (moveOperations.length > 0) {
                this.history.push({
                    description: `Organized ${moveOperations.length} file(s) in ${await window.electronAPI.getBasename(this.currentPath)}`,
                    details: `Organized: ${Array.from(movedCategories).join(', ')}`,
                    timestamp: new Date().toLocaleString(),
                    operations: moveOperations,
                    undone: false
                });
                await this.loadDirectory(this.currentPath);
                this.showToast('Success', `Organized ${moveOperations.length} files successfully.`, 'success');
            } else {
                this.showToast('All Set', 'No files needed to be organized.', 'info');
            }
        } catch (error) {
            console.error("Organization Error:", error);
            this.showConfirmation('Organization Error', `An error occurred: ${error.message}`);
        } finally {
            this.isOrganizing = false;
            this.toggleOrganizeLoading(false);
        }
    }

    async categorizeFile(filename) {
        const ext = `.${filename.split('.').pop()}`.toLowerCase();
        for (const category in this.organizationRules) {
            if (this.organizationRules[category].extensions.includes(ext)) {
                return { 
                    category,
                    targetFolder: await window.electronAPI.pathJoin(this.currentPath, this.organizationRules[category].folderName)
                };
            }
        }
        return { category: null };
    }

    toggleOrganizeLoading(isLoading) {
        const iconContainer = document.getElementById('organize-now-icon');
        const card = document.getElementById('organize-now');
        if(isLoading) {
            iconContainer.classList.add('loading');
            iconContainer.innerHTML = this.icons.get('loading');
            card.querySelector('.card-title-small').textContent = 'Organizing...';
        } else {
            iconContainer.classList.remove('loading');
            iconContainer.innerHTML = this.icons.get('organize');
            card.querySelector('.card-title-small').textContent = 'Smart Organize';
        }
    }

    setupEventListeners() {
        document.querySelectorAll('.nav-pill').forEach(pill => pill.addEventListener('click', () => this.switchView(pill.dataset.view)));
        document.getElementById('browse-folder-welcome').addEventListener('click', () => this.selectAndNavigateToPath());
        document.getElementById('custom-rules-btn').addEventListener('click', () => this.switchView('settings'));
        document.getElementById('browse-folder').addEventListener('click', () => this.selectAndNavigateToPath());
        document.getElementById('organize-now').addEventListener('click', () => this.organizeCurrentDirectory());
        document.getElementById('refresh-btn').addEventListener('click', () => this.refreshCurrentDirectory());
        document.getElementById('theme-toggle').addEventListener('click', () => this.toggleTheme());
        document.getElementById('reset-settings-btn').addEventListener('click', () => this.resetSettings());
        document.getElementById('add-category-btn').addEventListener('click', () => this.addNewCategory());
        document.getElementById('clear-history-btn').addEventListener('click', () => this.clearHistory());
        
        const settingsList = document.getElementById('settings-rules-list');
        settingsList.addEventListener('click', async (e) => {
            const button = e.target.closest('.delete-category-btn');
            if (button) {
                const key = button.dataset.key;
                const folderName = this.organizationRules[key]?.folderName || key;
                const confirmed = await this.showConfirmation('Delete Category?', `Are you sure you want to delete the "${folderName}" category?`);
                if(confirmed) {
                    delete this.organizationRules[key];
                    await this.saveSettings();
                    this.renderSettingsPage();
                }
            }
        });
        
        settingsList.addEventListener('change', (e) => {
            const key = e.target.dataset.key;
            if (!key || !this.organizationRules[key]) return;
            if (e.target.matches('.category-name-input')) {
                this.organizationRules[key].folderName = e.target.value;
                this.saveSettings();
            }
            if (e.target.matches('.category-extensions-input')) {
                const extensions = e.target.value.split(',').map(ext => ext.trim().toLowerCase()).filter(ext => ext.startsWith('.'));
                this.organizationRules[key].extensions = extensions;
                this.saveSettings();
            }
        });

        document.getElementById('history-timeline-container').addEventListener('click', async (e) => {
            const undoBtn = e.target.closest('.undo-btn');
            if (undoBtn && !undoBtn.disabled) {
                const historyIndex = parseInt(undoBtn.dataset.index, 10);
                await this.undoOrganization(historyIndex);
            }
        });
    }

    switchView(viewId) {
        document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
        document.getElementById(`${viewId}-view`).classList.remove('hidden');
        document.querySelectorAll('.nav-pill').forEach(p => p.classList.remove('active'));
        document.querySelector(`.nav-pill[data-view="${viewId}"]`).classList.add('active');

        if (viewId === 'files') {
            if (this.currentPath) {
                document.getElementById('files-prompt').classList.add('hidden');
                document.getElementById('main-content-wrapper').classList.remove('hidden');
            } else {
                document.getElementById('files-prompt').classList.remove('hidden');
                document.getElementById('main-content-wrapper').classList.add('hidden');
            }
        }
        if(viewId === 'history') this.renderHistory();
        if(viewId === 'settings') this.renderSettingsPage();
    }
    
    async clearHistory() {
        if (this.history.length === 0) {
            return this.showToast('Info', 'History is already empty.', 'info');
        }
        const confirmed = await this.showConfirmation('Clear History?', 'Are you sure you want to permanently delete all history records? This action cannot be undone.');
        if (confirmed) {
            this.history = [];
            await this.saveSettings();
            this.renderHistory();
            this.showToast('Success', 'All history has been cleared.', 'success');
        }
    }

    addNewCategory() {
        const nameInput = document.getElementById('category-name-input');
        const extsInput = document.getElementById('category-extensions-input');
        const name = nameInput.value.trim();
        const key = name.toLowerCase().replace(/\s+/g, '');

        if (!name || !key) return this.showToast('Error', 'Category name is required.', 'error');
        if (this.organizationRules[key]) return this.showToast('Error', 'A category with this name already exists.', 'error');
        const extensions = extsInput.value.split(',').map(e => e.trim().toLowerCase()).filter(e => e.startsWith('.'));
        if (extensions.length === 0) return this.showToast('Error', 'At least one valid extension (e.g., .txt) is required.', 'error');

        this.organizationRules[key] = { folderName: name, extensions };
        this.saveSettings();
        this.renderSettingsPage();
        nameInput.value = '';
        extsInput.value = '';
        this.showToast('Category Added', `Rule for "${name}" was created.`, 'success');
    }

    async selectAndNavigateToPath() {
        const path = await window.electronAPI.selectDirectory();
        if (path) await this.navigateToPath(path);
    }

    async navigateToPath(path) {
        this.currentPath = path;
        document.getElementById('current-path-display').textContent = path;
        this.switchView('files');
        await this.loadDirectory(path);
    }
  
    async loadDirectory(path) {
        try {
            const items = await window.electronAPI.readDirectory(path);
            this.displayItems(items);
        } catch (error) {
            this.showConfirmation('Error', `Cannot read directory: ${error.message}`);
            this.displayItems([]);
        }
    }
  
    displayItems(items) {
        const container = document.getElementById('file-items-container');
        if (items.length === 0) {
            container.innerHTML = `<p style="text-align: center; color: var(--text-secondary);">This folder is empty.</p>`;
            return;
        }
        const sortedItems = [...items].sort((a, b) => {
            if (a.isDirectory === b.isDirectory) return a.name.localeCompare(b.name);
            return a.isDirectory ? -1 : 1;
        });
        container.innerHTML = sortedItems.map(item => `
            <div class="file-tree-item" style="--level: 0;">
                <div class="file-item-content" title="${item.name}">
                    <div class="file-icon">${this.icons.get(item.isDirectory ? 'folder' : 'file')}</div>
                    <div class="file-name">${item.name}</div>
                </div>
            </div>`).join('');
    }

    renderSettingsPage() {
        const list = document.getElementById('settings-rules-list');
        list.innerHTML = Object.keys(this.organizationRules).map(key => {
            const rule = this.organizationRules[key];
            return `<div class="settings-group"> <div class="category-header"> <input class="category-name-input" data-key="${key}" value="${rule.folderName}"> <button class="icon-btn delete-category-btn" data-key="${key}" title="Delete Category">${this.icons.get('delete')}</button> </div> <label class="settings-label">Extensions (comma-separated)</label> <input class="settings-input category-extensions-input" data-key="${key}" value="${rule.extensions.join(', ')}"> </div>`;
        }).join('');
    }

    renderHistory() {
        const container = document.getElementById('history-timeline-container');
        document.getElementById('clear-history-btn').style.display = this.history.length > 0 ? 'inline-flex' : 'none';

        if (this.history.length === 0) {
            container.innerHTML = `<p style="text-align:center; color: var(--text-secondary);">No organization activities yet.</p>`;
            return;
        }
        container.innerHTML = this.history.map((item, index) => {
            const sideClass = index % 2 === 0 ? 'right' : 'left';
            return `
            <div class="history-timeline-item ${sideClass}">
                <div class="timeline-node"></div>
                <div class="timeline-content">
                    <div class="history-description">${item.description}</div>
                    <div class="history-details">${item.details}</div>
                    <div class="history-timestamp">${item.timestamp}</div>
                    <button class="btn btn-secondary undo-btn" data-index="${index}" ${item.undone ? 'disabled' : ''}>
                        ${this.icons.get('undo')} ${item.undone ? 'Undone' : 'Undo'}
                    </button>
                </div>
            </div>`;
        }).reverse().join('');
    }

    async undoOrganization(historyIndex) {
        const historyItem = this.history[historyIndex];
        if (!historyItem || historyItem.undone) return;
        const confirmed = await this.showConfirmation('Undo Operation?', 'Are you sure you want to move these files back to their original locations?');
        if (!confirmed) return;
        
        const undoBtn = document.querySelector(`.undo-btn[data-index="${historyIndex}"]`);
        if(undoBtn) {
            undoBtn.innerHTML = 'Undoing...';
            undoBtn.disabled = true;
        }

        try {
            for (const op of [...historyItem.operations].reverse()) {
                const originalDir = await window.electronAPI.getDirname(op.from);
                await window.electronAPI.createDirectory(originalDir);
                await window.electronAPI.moveFile(op.to, op.from);
            }
            historyItem.undone = true;
            this.showToast('Success', 'The organization action has been undone.', 'success');
        } catch (error) {
            this.showConfirmation('Undo Error', `Failed to undo: ${error.message}`);
        } finally {
            this.renderHistory();
            if(this.currentPath) await this.refreshCurrentDirectory();
        }
    }
    
    showToast(title, message, type = 'info', duration = 5000) {
        const container = document.getElementById('toast-container');
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = `<div class="toast-icon">${this.icons.get(type)}</div> <div class="toast-body"> <div class="toast-title">${title}</div> <div class="toast-message">${message}</div> </div> <div class="toast-close">×</div> <div class="toast-progress"></div>`;
        toast.querySelector('.toast-progress').style.animationDuration = `${duration / 1000}s`;
        const removeToast = () => {
            toast.classList.add('fade-out');
            toast.addEventListener('animationend', () => toast.remove());
        };
        toast.querySelector('.toast-close').addEventListener('click', removeToast);
        setTimeout(removeToast, duration);
        container.appendChild(toast);
    }
    
    showConfirmation(title, message) {
        const modal = document.getElementById('modal-container');
        document.getElementById('modal-title').textContent = title;
        document.getElementById('modal-body').textContent = message;
        document.getElementById('modal-header').className = 'modal-header';
        document.getElementById('modal-cancel-btn').classList.remove('hidden');
        document.getElementById('modal-confirm-btn').textContent = 'Confirm';
        modal.classList.remove('hidden');

        return new Promise(resolve => {
            const confirmBtn = document.getElementById('modal-confirm-btn');
            const cancelBtn = document.getElementById('modal-cancel-btn');
            const newConfirmBtn = confirmBtn.cloneNode(true);
            confirmBtn.parentNode.replaceChild(newConfirmBtn, confirmBtn);
            const newCancelBtn = cancelBtn.cloneNode(true);
            cancelBtn.parentNode.replaceChild(newCancelBtn, cancelBtn);
            newConfirmBtn.addEventListener('click', () => { modal.classList.add('hidden'); resolve(true); }, { once: true });
            newCancelBtn.addEventListener('click', () => { modal.classList.add('hidden'); resolve(false); }, { once: true });
        });
    }

    async refreshCurrentDirectory() {
        if (!this.currentPath) return;
        const btn = document.getElementById('refresh-btn');
        btn.classList.add('spinning');
        await this.loadDirectory(this.currentPath);
        setTimeout(() => btn.classList.remove('spinning'), 500);
    }
    
    initializeTheme() {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        document.body.dataset.theme = savedTheme;
        const themeToggleBtn = document.getElementById('theme-toggle');
        if (themeToggleBtn) {
            themeToggleBtn.innerHTML = this.icons.get(savedTheme === 'light' ? 'themeDark' : 'themeLight');
        }
    }
    
    toggleTheme() {
        const newTheme = (document.body.dataset.theme === 'light') ? 'dark' : 'light';
        document.body.dataset.theme = newTheme;
        localStorage.setItem('theme', newTheme);
        document.getElementById('theme-toggle').innerHTML = newTheme === 'light' ? this.icons.get('themeDark') : this.icons.get('themeLight');
    }

    createParticles(count) {
        const container = document.getElementById('particles');
        for (let i = 0; i < count; i++) {
            const p = document.createElement('div');
            p.className = 'particle';
            p.style.left = `${Math.random() * 100}%`;
            p.style.top = `${Math.random() * 100}%`;
            p.style.animationDelay = `${Math.random() * 12}s`;
            p.style.transform = `scale(${Math.random() * 0.5 + 0.5})`;
            container.appendChild(p);
        }
    }
}
  
window.addEventListener('DOMContentLoaded', () => new PCOrganizer());