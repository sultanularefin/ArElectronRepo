function f1() {

    const {remote} = require('electron')
    const {Tray, Menu} = remote
    const path = require('path')

 let trayIcon = new Tray(path.join('','appicon.png'))

         const trayMenuTemplate = [
            {
               label: 'Empty Application',
               enabled: false
            },

            {
               label: 'Settings',
               click: function () {
                  console.log("Clicked on settings")
               }
            },

            {
               label: 'Help',
               click: function () {
                  console.log("Clicked on Help")
               }
            }
         ]

        

         let trayMenu = Menu.buildFromTemplate(trayMenuTemplate)
         trayIcon.setContextMenu(trayMenu)
        
         remote.BrowserWindow.getFocusedWindow().minimize();
    


}



function captureScreen() {

    

    var moment = require('moment');
    moment().format();
    var now = moment().format("D-MMM-YY HH-mm");

    console.log("now: ", now);


    var screenshot = require('desktop-screenshot');

    var fs = require('fs');

    var path = require('path')

    var loc = window.location.pathname;

    //console.log(loc);

    //return 0;

    var dir1 = loc.substring(0, loc.lastIndexOf('/'));

    var dir = './ScreenShots';
    var dir1 = './ScreenShots/';

    if (!fs.existsSync(dir1)) {
        fs.mkdirSync(dir1);
    }

    else {
        console.log("Dir1: ", dir1, "existed before");
    }


    var screenShotPath = path.join(dir1);
    console.log(screenShotPath);

    var fileName = now + ".png";

    //console.log(fileName);


    var filecheck = path.join(dir, fileName);
    console.log("filecheck", filecheck);
    // console.log();

 
    if (fs.existsSync(filecheck)) {

        console.log("file found");
        fs.unlink(filecheck, (err) => {


            if (err) {
                console.log("error in delete");
            }
            
        });


        //count = i;
        //document.cookie = "count = 30";
    }
    else {
        console.log("not found");
        //count = i;

    }

    console.log("Before screen write");
    //return 0;

    //screenshot()
    screenshot(screenShotPath + now +'.png', function (error, complete) {
        if (error)
            console.log("Screenshot failed", error);
        else
            console.log("Screenshot succeeded");
    });




}


