const { app, ipcMain, BrowserWindow } = require('electron');

let mainWindow;

app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false, 
    },
  });

  mainWindow.loadFile("./views/index.html");
});

ipcMain.on("open-prestamo", () => {
  mainWindow.loadFile("./views/prestamo1.html");
});

ipcMain.on("open-main", () => {
    mainWindow.loadFile("./views/index.html");
});
  