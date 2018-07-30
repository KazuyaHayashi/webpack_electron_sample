import {app, BrowserWindow} from "electron";
import {autoUpdater} from "electron-updater";
import {warn} from "electron-log";

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

    warn(app.getVersion());
    autoUpdater.on("checking-for-update", () => {
        warn("checking updates");
    });
    autoUpdater.on("update-not-available", () => {
        warn("no updates available");
    });
    autoUpdater.on("update-available", () => {
        warn("update-available");
    });
    autoUpdater.on("update-downloaded", () => {
        warn("update downloaded");
    });
    autoUpdater.checkForUpdatesAndNotify();
});

app.on("window-all-closed", () => {
    app.quit();
});

app.on("activate", () => {
    if (win === null) {
        createWindow(800, 600);
    }
});
