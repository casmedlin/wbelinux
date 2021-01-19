const electron = require('electron');
const { app } = electron;
const c = require('./constants');
const Helper = require('./helper');

// create menu template
const menuTemplate = function(mainWindow) {
  // Helper function for loading URLs
  const loadRelativeUrl = function(url) {
    if (Helper.isUsingShell()) {
      mainWindow.webContents.send(
          'shell:loadUrl',
          url
      );
    } else {
      mainWindow.loadRelativeUrl(url);
    }
  };

  const template = [
    {
      label: 'Menu',
      submenu: [
        {
          label: 'Home',
          click () {
            mainWindow.loadURL('https://weeklybiblicalencouragement.com/')
          }
        },
        {
          label: 'Blog',
          click () {
            mainWindow.loadURL('https://weeklybiblicalencouragement.com/weekly-dive-deeper/')
          }
        },
        {
        label: 'new to christianity',
          click () {
            mainWindow.loadURL('https://weeklybiblicalencouragement.com/2019/11/09/new-to-christianity/')
          }
        },
        {
        label: 'featured images',
          click () {
            mainWindow.loadURL('https://weeklybiblicalencouragement.com/featured-images/')
          }
        },
        {
        label: 'podcast',
        click () {
          mainWindow.loadURL('https://weeklybiblicalencouragement.com/our-podcast/')
        }
      },
      {
      label: 'clockface',
        click () {
          mainWindow.loadURL('https://weeklybiblicalencouragement.com/wearable/')
        }
      },
      {
      label: 'Wallpapers',
        click () {
          mainWindow.loadURL('https://weeklybiblicalencouragement.com/wallpapers/')
        }
      },
      {
      label: 'resource',
        click () {
          mainWindow.loadURL('https://weeklybiblicalencouragement.com/resource/')
        }
      },
      {
        label: 'project bible resources',
          click () {
            mainWindow.loadURL('https://weeklybiblicalencouragement.com/project-bible-resources/')
          }
        },
        {
          label: 'about us',
            click () {
              mainWindow.loadURL('https://weeklybiblicalencouragement.com/about-us/')
            }
          },
          {
            label: 'contact',
              click () {
                mainWindow.loadURL('https://weeklybiblicalencouragement.com/contact/')
              }
            },
    ]
    },
    {
      label: 'tools',
      submenu: [
        { role: 'undo' },
        { role: 'redo' },
        { type: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' },
        { type: 'separator' },
        { role: 'reload' },
        { role: 'forcereload' },
        { role: 'togglefullscreen' },
        { type: 'separator' },
        { role: 'resetzoom' },
        { role: 'zoomin' },
        { role: 'zoomout' },
        { type: 'separator' }
      ]
    }
  ]

  return template;
}

module.exports = menuTemplate;
