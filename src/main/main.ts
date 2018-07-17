const {app, BrowserWindow} = require('electron');

let win: any;

function createWindow(width: number, height: number) {
    win = new BrowserWindow({
        width: width,
        height: height,
        webPreferences: {
            nodeIntegration: false
        }
    })
    win.loadURL(`file://${__dirname}/../html/index.html`);
    win.webContents.openDevTools();

    win.on('closed', () => {
        win = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    app.quit();
});

app.on('activate', () => {
    if(win === null) {
        createWindow(800, 600);
    }
});
