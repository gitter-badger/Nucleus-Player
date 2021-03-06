'use strict';

const electron = require('electron');
const ipcMain = electron.ipcMain;

// DEV: Wrap the ipcMain object and make it globally available
class Emit {
  constructor(browser) {
    this.browser = browser;
  }

  fire(event, details) {
    this.browser.webContents.send(event, details);
  }

  on(event, fn) {
    ipcMain.on(event, fn);
  }

  once(event, fn) {
    ipcMain.once(event, fn);
  }
}

module.exports = (browser) => {
  return new Emit(browser);
};
