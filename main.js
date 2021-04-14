// const {app, BrowserWindow,Tray} = require('electron')

const electron = require("electron");
const { app, BrowserWindow, Tray } = electron;
require('electron-debug')({ showDevTools: true });

const path = require('path')
const url = require('url')






//var tray = require('tray-windows') 

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createWindow() {
  
    // win = new BrowserWindow(
    //     {
    //        width: 300,
    //         height: 200,
    //         // width: 600,
    //         // height: 400,
    //         frame: false,
    //         icon: './appicon.png',
    //         //resizable: false
    //
    //
    //     })

    const win = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            width: 300,
            height: 200,
            // width: 600,
            // height: 400,
            frame: false,
            icon: './appicon.png',
            //resizable: false

        },

    })
    win.show()

    // and load the index.html of the app.
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true


    }))



  

    // Open the DevTools.
    win.webContents.openDevTools()

    // Emitted when the window is closed.
    win.on('closed', () => {
       // alert("XXX"); not called 

        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null
    })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
// --new arefin april -15 --2021:: begins here..

app.on("ready", () => {
    const mainWindow = new BrowserWindow({
        width: 1000,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
        },
    });
    mainWindow.loadURL(`file://${__dirname}/index.html`);

    // Open the DevTools.
    // win.webContents.openDevTools()

    /*
    // Emitted when the window is closed.
    win.on('closed', () => {
        // alert("XXX"); not called

        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null
    })


     */



});

// -- new arefin april -- 15 --2021 ends here...

// old arefin
// app.on('ready', createWindow)
//old arefin


// Quit when all windows are closed.
app.on('window-all-closed', () => {
    //console.log("At WINDOW-ALL-CLOSED"); runs in cmd when closed button clicked in windows.
    
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }

    if (win.BrowserWindow.isMinimized()) {
        win.BrowserWindow.restore()
        win.BrowserWindow.getFocusedWindow.restore()
    }



    
})

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        createWindow()
    }
    if (win.BrowserWindow.isMinimized()) {
        win.BrowserWindow.restore()
        win.BrowserWindow.getFocusedWindow.restore()
    }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

