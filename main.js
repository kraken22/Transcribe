const { app, BrowserWindow } = require("electron");

let mainWindow = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    titleBarStyle: "hidden"
  });
  mainWindow.loadURL("http://localhost:3000");
  mainWindow.on("closed", () => (mainWindow = null));
}

app.on("ready", createWindow);
app.on("window-all-closed", app.quit);
