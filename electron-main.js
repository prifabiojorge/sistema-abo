const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 900,
    minHeight: 600,
    title: 'ABO Sim — Tipagem Sanguínea',
    icon: path.join(__dirname, 'app', 'img', 'favicon.svg'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'electron-preload.js')
    },
    show: false,
    backgroundColor: '#111520'
  });

  win.loadFile(path.join(__dirname, 'app', 'index.html'));

  win.once('ready-to-show', () => {
    win.show();
    // win.webContents.openDevTools(); // Descomente para debug
  });

  win.on('closed', () => {
    app.quit();
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
