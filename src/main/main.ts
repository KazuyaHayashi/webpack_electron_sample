import {app, BrowserWindow} from "electron";

let win: Electron.BrowserWindow = null;

function createWindow(width: number, height: number) {
    win = new BrowserWindow({
        width,
        height,
        webPreferences: {
            nodeIntegration: false,
        },
    });
    win.loadURL(`file://${__dirname}/../html/index.html`);
    win.webContents.openDevTools();

    win.on("closed", () => {
        win = null;
    });
}

app.on("ready", () => {
    createWindow(800, 600);
});

app.on("window-all-closed", () => {
    app.quit();
});

app.on("activate", () => {
    if (win === null) {
        createWindow(800, 600);
    }
});
