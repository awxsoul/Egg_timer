const { app, BrowserWindow } = require('electron/main')
const { read } = require('original-fs')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 300,
    height: 300,
    frame: false
  })

  win.loadFile('index.html')
}

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