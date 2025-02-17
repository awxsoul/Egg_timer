
const { app, BrowserWindow, ipcMain } = require('electron')
const { read } = require('original-fs')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 300,
    height: 300,
    frame: false,
    resizable: false,
    webPreferences:{
      nodeIntegration: true,
      contextIsolation:false //for close
    } 
  })
  win.setAlwaysOnTop(true, 'screen');
  win.loadFile('index.html')
  win.isAlwaysOnTop(true);
}

ipcMain.on('close',()=>{
  app.quit();
}) ;

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})