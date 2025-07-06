const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  getBasename: (fullPath) => ipcRenderer.invoke('get-basename', fullPath),
  pathJoin: (...args) => ipcRenderer.invoke('path-join', ...args),
  getDirname: (fullPath) => ipcRenderer.invoke('get-dirname', fullPath),
  selectDirectory: () => ipcRenderer.invoke('select-directory'),
  readDirectory: (dirPath) => ipcRenderer.invoke('read-directory', dirPath),
  createDirectory: (dirPath) => ipcRenderer.invoke('create-directory', dirPath),
  moveFile: (source, destination) => ipcRenderer.invoke('move-file', source, destination),
  getSettings: () => ipcRenderer.invoke('get-settings'),
  saveSettings: (settings) => ipcRenderer.invoke('save-settings', settings),
});