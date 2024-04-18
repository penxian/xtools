const { exec } = require("child_process");
const electron = require("electron");
//关机
function shutdownWindow() {
  let command = exec("shutdown -s -t 00", function (err, stdout, stderr) {
    if (err || stderr) {
      console.log("shutdown failed" + err + stderr);
    }
  });
  command.stdin.end();
  command.on("close", function (code) {
    console.log("shutdown", code);
  });
}

function colseWindow() {
  var fs = require("fs");
  var data = fs.readFileSync("test.txt", "utf-8");
  console.log(data);
}

window.exports = {
  time: {
    mode: "none",
    args: {
      enter: (action) => {
        // shutdownWindow();
        // 在主进程中.
        console.log(electron, utools);
        // const win = utools.createBrowserWindow("./index.html", {
        //   width: 800,
        //   height: 600,
        //   focusable: true,
        //   alwaysOnTop: true,
        //   titleBarStyle: "hidden",
        //   titleBarOverlay: true
        // });
        // win.webContents.openDevTools();
      }
    }
  }
};
