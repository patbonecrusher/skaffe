import { BrowserWindow } from 'electron'
import { isInDevMode } from '../common/utils'
import { format as formatUrl } from 'url'
import * as path from 'path'
import {throttle} from '../common/decorator'

import ElectronStore from 'electron-store'
const config = new ElectronStore()

const windowSize = config.get('windowsize') || {
	x: null,
	y: null,
	width: 1080,
	height: 720
}

const createMainWindow = app => {
	console.log(app)
	console.log(isInDevMode)
	const mainWindow = new BrowserWindow({
		x: windowSize.x,
		y: windowSize.y,
		width: windowSize.width,
		height: windowSize.height,
		// useContentSize: true,
		minWidth: 500,
		minHeight: 320,
		// webPreferences: {
		// 	zoomFactor: 2.0,
		// 	enableBlinkFeatures: 'OverlayScrollbars'
		// },
		// icon: path.resolve(__dirname, '../resources/app.png')
	})
	mainWindow.webContents.openDevTools()
	
	if (isInDevMode) {
		mainWindow.loadURL(`http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`)
	}
	else {
		console.log(__dirname)
		mainWindow.loadURL(formatUrl({
			pathname: path.join(__dirname, 'index.html'),
			protocol: 'file',
			slashes: true
		}))
	}

	// mainWindow.webContents.on('new-window', function (e) {
	// 	e.preventDefault()
	// })
	
	// mainWindow.webContents.sendInputEvent({
	// 	type: 'keyDown',
	// 	keyCode: '\u0008'
	// })
	
	// mainWindow.webContents.sendInputEvent({
	// 	type: 'keyUp',
	// 	keyCode: '\u0008'
	// })
	
	// if (process.platform === 'darwin') {
	// 	mainWindow.on('close', function (e) {
	// 		e.preventDefault()
	// 		if (mainWindow.isFullScreen()) {
	// 			mainWindow.once('leave-full-screen', function () {
	// 				mainWindow.hide()
	// 			})
	// 			mainWindow.setFullScreen(false)
	// 		} else {
	// 			mainWindow.hide()
	// 		}
	// 	})
	
	// 	app.on('before-quit', function (e) {
	// 		mainWindow.removeAllListeners()
	// 	})
	// }
	
	mainWindow.on('resize', throttle(storeWindowSize, 500))
	mainWindow.on('move', throttle(storeWindowSize, 500))
	
	function storeWindowSize() {
		try {
			config.set('windowsize', mainWindow.getBounds())
		} catch (e) {
			// ignore any errors because an error occurs only on update
			// refs: https://github.com/BoostIO/Boostnote/issues/243
		}
	}
	
	app.on('activate', function () {
		if (mainWindow == null) return null
		mainWindow.show()
	})	

	return mainWindow
}

export default createMainWindow