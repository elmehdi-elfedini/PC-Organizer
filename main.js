const { app, BrowserWindow, ipcMain, Menu, shell, dialog } = require('electron');
const path = require('path');
const fs = require('fs').promises;

let mainWindow;

// --- Settings File Logic ---
const settingsPath = path.join(app.getPath('userData'), 'settings.json');
async function readSettings() {
  try {
    const settingsData = await fs.readFile(settingsPath, 'utf8');
    return JSON.parse(settingsData);
  } catch (error) { return null; }
}
async function writeSettings(settings) {
  await fs.writeFile(settingsPath, JSON.stringify(settings, null, 2), 'utf8');
}

// --- Main Window Creation ---
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280, height: 820, minWidth: 1000, minHeight: 700,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
    titleBarStyle: 'hidden',
    titleBarOverlay: { color: 'rgba(0,0,0,0)', height: 40, symbolColor: '#747474' },
    show: false
  });
  mainWindow.loadFile('index.html');
  mainWindow.once('ready-to-show', () => mainWindow.show());

  const menuTemplate = [
    {
      label: 'File',
      submenu: [
        { role: 'quit' }
      ]
    },
    {
      label: 'View',
      submenu: [
        { role: 'reload' },
        { role: 'forceReload' },
        { type: 'separator' },
        { role: 'toggledevtools' }
      ]
    }
  ];
  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);
}

// --- App Events ---
app.whenReady().then(createWindow);
app.on('window-all-closed', () => process.platform !== 'darwin' && app.quit());
app.on('activate', () => BrowserWindow.getAllWindows().length === 0 && createWindow());

// --- IPC HANDLERS ---
ipcMain.handle('select-directory', async () => {
    const { canceled, filePaths } = await dialog.showOpenDialog(mainWindow, { properties: ['openDirectory'] });
    return canceled ? null : filePaths[0];
});
ipcMain.handle('read-directory', async (event, dirPath) => {
  const items = await fs.readdir(dirPath, { withFileTypes: true });
  return Promise.all(items.map(async item => {
    const itemPath = path.join(dirPath, item.name);
    return { name: item.name, isDirectory: item.isDirectory(), path: itemPath };
  }));
});
ipcMain.handle('create-directory', (event, dirPath) => fs.mkdir(dirPath, { recursive: true }));
ipcMain.handle('move-file', (event, source, destination) => fs.rename(source, destination));
ipcMain.handle('get-basename', (event, fullPath) => path.basename(fullPath));
ipcMain.handle('path-join', (event, ...args) => path.join(...args));
ipcMain.handle('get-dirname', (event, fullPath) => path.dirname(fullPath));
ipcMain.handle('get-settings', readSettings);
ipcMain.handle('save-settings', (event, settings) => writeSettings(settings));