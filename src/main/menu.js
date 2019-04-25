import { BrowserWindow, shell, ipcMain as ipc } from 'electron';
//import { webContents, setFullScreen, isFullScreen } from './window';

const macOS = process.platform === 'darwin'
// const WIN = process.platform === 'win32'
const LINUX = process.platform === 'linux'

const skaffe_menu = macOS
	? {
		label: 'Skaffe',
		submenu: [
			{
				label: 'About Skaffe',
				selector: 'orderFrontStandardAboutPanel:'
			},
			{
				type: 'separator'
			},
			{
				label: 'Preferences',
				accelerator: 'Command+,',
				click() {
					// mainWindow.webContents.send('side:preferences')
				}
			},
			{
				type: 'separator'
			},
			{
				label: 'Hide Skaffe',
				accelerator: 'Command+H',
				selector: 'hide:'
			},
			{
				label: 'Hide Others',
				accelerator: 'Command+Shift+H',
				selector: 'hideOtherApplications:'
			},
			{
				label: 'Show All',
				selector: 'unhideAllApplications:'
			},
			{
				type: 'separator'
			},
			{
				label: 'Quit Skaffe',
				role: 'quit',
				accelerator: 'CommandOrControl+Q'
			}
		]
	}
	: {
		label: 'Skaffe',
		submenu: [
			{
				label: 'Preferences',
				accelerator: 'Control+,',
				click() {
					// webContents.send('side:preferences')
				}
			},
			{
				type: 'separator'
			},
			{
				role: 'quit',
				accelerator: 'Control+Q'
			}
		]
	}

const file = {
	label: 'File',
	submenu: [
		{
			label: 'New Note',
			accelerator: 'CommandOrControl+N',
			click() {
				// webContents.send('top:new-note')
			}
		},
		{
			label: 'Focus Note',
			accelerator: macOS ? 'Command+E' : 'Control+E',
			click() {
				// webContents.send('detail:focus')
			}
		},
		{
			label: 'Delete Note',
			accelerator: macOS ? 'Command+Shift+Backspace' : 'Control+Shift+Backspace',
			click() {
				// webContents.send('detail:delete')
			}
		},
		{
			label: 'Clone Note',
			accelerator: macOS ? 'Command+D' : 'Control+D',
			click() {
				// webContents.send('list:clone')
			}
		},
		{
			type: 'separator'
		},
		{
			label: 'Import from',
			submenu: [
				{
					label: 'Plain Text, MarkDown (.txt, .md)',
					click() {
						// webContents.send('import:file')
					}
				}
			]
		},
		{
			label: 'Export as',
			submenu: [
				{
					label: 'Plain Text (.txt)',
					click() {
						// webContents.send('list:isMarkdownNote', 'export-txt')
						// webContents.send('export:save-text')
					}
				},
				{
					label: 'MarkDown (.md)',
					click() {
						// webContents.send('list:isMarkdownNote', 'export-md')
						// webContents.send('export:save-md')
					}
				},
				{
					label: 'HTML (.html)',
					click() {
						// webContents.send('list:isMarkdownNote', 'export-html')
						// webContents.send('export:save-html')
					}
				},
				{
					label: 'PDF (.pdf)',
					click() {
						// webContents.send('list:isMarkdownNote', 'export-pdf')
						// webContents.send('export:save-pdf')
					}
				}
			]
		},
		{
			type: 'separator'
		},
		{
			label: 'Generate/Update Markdown TOC',
			accelerator: 'Shift+Ctrl+T',
			click() {
				// webContents.send('code:generate-toc')
			}
		},
		{
			label: 'Format Table',
			click() {
				// webContents.send('code:format-table')
			}
		},
		{
			type: 'separator'
		},
		{
			label: 'Print',
			accelerator: 'CommandOrControl+P',
			click() {
				// webContents.send('list:isMarkdownNote', 'print')
				// webContents.send('print')
			}
		}
	]
}

if (LINUX) {
	file.submenu.push({
		type: 'separator'
	}, {
			label: 'Preferences',
			accelerator: 'Control+,',
			click() {
				// webContents.send('side:preferences')
			}
		}, {
			type: 'separator'
		}, {
			role: 'quit',
			accelerator: 'Control+Q'
		})
}

const edit = {
	label: 'Edit',
	submenu: [
		{
			label: 'Undo',
			accelerator: 'Command+Z',
			selector: 'undo:'
		},
		{
			label: 'Redo',
			accelerator: 'Shift+Command+Z',
			selector: 'redo:'
		},
		{
			type: 'separator'
		},
		{
			label: 'Cut',
			accelerator: 'Command+X',
			selector: 'cut:'
		},
		{
			label: 'Copy',
			accelerator: 'Command+C',
			selector: 'copy:'
		},
		{
			label: 'Paste',
			accelerator: 'Command+V',
			selector: 'paste:'
		},
		{
			label: 'Select All',
			accelerator: 'Command+A',
			selector: 'selectAll:'
		},
		{
			type: 'separator'
		},
		{
			label: 'Add Tag',
			accelerator: 'CommandOrControl+Shift+T',
			click() {
				// webContents.send('editor:add-tag')
			}
		}
	]
}

const view = {
	label: 'View',
	submenu: [
		{
			label: 'Reload',
			accelerator: 'CommandOrControl+R',
			click() {
				BrowserWindow.getFocusedWindow().reload()
			}
		},
		{
			label: 'Toggle Developer Tools',
			accelerator: macOS ? 'Command+Alt+I' : 'Control+Shift+I',
			click() {
				// BrowserWindow.getFocusedWindow().toggleDevTools()
			}
		},
		{
			type: 'separator'
		},
		{
			label: 'Next Note',
			accelerator: 'CommandOrControl+]',
			click() {
				// webContents.send('list:next')
			}
		},
		{
			label: 'Previous Note',
			accelerator: 'CommandOrControl+[',
			click() {
				// webContents.send('list:prior')
			}
		},
		{
			type: 'separator'
		},
		{
			label: 'Focus Search',
			accelerator: 'CommandOrControl+Shift+L',
			click() {
				// webContents.send('top:focus-search')
			}
		},
		{
			type: 'separator'
		},
		{
			label: 'Toggle Full Screen',
			accelerator: macOS ? 'Command+Control+F' : 'F11',
			click() {
				// setFullScreen(!isFullScreen())
			}
		},
		{
			label: 'Toggle Side Bar',
			accelerator: 'CommandOrControl+B',
			click() {
				// webContents.send('editor:fullscreen')
			}
		},
		{
			type: 'separator'
		},
		{
			label: 'Actual Size',
			accelerator: macOS ? 'CommandOrControl+0' : 'Control+0',
			click() {
				// webContents.send('status:zoomreset')
			}
		},
		{
			label: 'Zoom In',
			accelerator: macOS ? 'CommandOrControl+=' : 'Control+=',
			click() {
				// webContents.send('status:zoomin')
			}
		},
		{
			label: 'Zoom Out',
			accelerator: macOS ? 'CommandOrControl+-' : 'Control+-',
			click() {
				// webContents.send('status:zoomout')
			}
		}
	]
}

let editorFocused

// Define extra shortcut keys
// webContents.on('before-input-event', (event, input) => {
// 	// Synonyms for Search (Find)
// 	if (input.control && input.key === 'l' && input.type === 'keyDown') {
// 		if (!editorFocused) {
// 			// webContents.send('top:focus-search')
// 			event.preventDefault()
// 		}
// 	}
// })

ipc.on('editor:focused', (event, isFocused) => {
	editorFocused = isFocused
})

const window = {
	label: 'Window',
	submenu: [
		{
			label: 'Minimize',
			accelerator: 'Command+M',
			selector: 'performMiniaturize:'
		},
		{
			label: 'Close',
			accelerator: 'Command+W',
			selector: 'performClose:'
		},
		{
			type: 'separator'
		},
		{
			label: 'Bring All to Front',
			selector: 'arrangeInFront:'
		}
	]
}

const help = {
	label: 'Help',
	role: 'help',
	submenu: [
		{
			label: 'Skaffe official site',
			click() { shell.openExternal('https://skaffe.io/') }
		},
		{
			label: 'Issue Tracker',
			click() { shell.openExternal('https://github.com/BoostIO/Boostnote/issues') }
		},
		{
			label: 'Changelog',
			click() { shell.openExternal('https://github.com/BoostIO/boost-releases') }
		},
		{
			label: 'Cheatsheets',
			submenu: [
				{
					label: 'Markdown',
					click() { shell.openExternal('https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet') }
				},
				{
					label: 'Latex',
					click() { shell.openExternal('https://katex.org/docs/supported.html') }
				},
				{
					label: 'HTML',
					click() { shell.openExternal('https://htmlcheatsheet.com/') }
				},
				{
					label: 'Boostnote',
					click() { shell.openExternal('https://github.com/TobseF/boostnote-markdown-cheatsheet/blob/master/BOOSTNOTE_MARKDOWN_CHEAT_SHEET.md') }
				}
			]
		}
	]
}

const template = process.platform === 'darwin'
	? [skaffe_menu, file, edit, view, window, help]
	: process.platform === 'win32'
		? [skaffe_menu, file, view, help]
		: [file, view, help]

export default template
