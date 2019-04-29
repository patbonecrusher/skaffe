import { app, BrowserWindow, Menu } from 'electron'
import * as path from 'path'
import createMainWindow from './window'

import template from './menu'
import tb from './touchbar'

var mainWindow = null

// Work around when running in dev mode. otherwise the name is always Electron
// and the appdata folder is also Electron.
const appName = 'Skaffe';
app.setName(appName);
const appData = app.getPath('appData');
app.setPath('userData', path.join(appData, appName));

// quit application when all windows are closed
app.on('window-all-closed', () => {
	app.quit()
})

// app.on('activate', () => {
// 	// on macOS it is common to re-create a window even after all windows have been closed
// 	if (mainWindow === null) {
// 		mainWindow = createMainWindow()
// 	}
// })

// create main BrowserWindow when electron is ready
app.on('ready', () => {
	mainWindow = createMainWindow(app)

	var menu = Menu.buildFromTemplate(template)
	//var touchBarMenu = require('./touchbar-menu')
	switch (process.platform) {
		case 'darwin':
			Menu.setApplicationMenu(menu)
			mainWindow.setTouchBar(tb)
			break
		case 'win32':
			mainWindow.setMenu(menu)
			break
		case 'linux':
			Menu.setApplicationMenu(menu)
			mainWindow.setMenu(menu)
	}
})

export default app