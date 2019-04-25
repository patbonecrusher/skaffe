import { TouchBar } from 'electron';
const { TouchBarButton, TouchBarSpacer } = TouchBar
// import { webContents } from './main-window';

const allNotes = new TouchBarButton({
	label: '📒',
	click: () => {
		// webContents.send('list:navigate', '/home')
	}
})

const starredNotes = new TouchBarButton({
	label: '⭐️',
	click: () => {
		// webContents.send('list:navigate', '/starred')
	}
})

const trash = new TouchBarButton({
	label: '🗑',
	click: () => {
		// webContents.send('list:navigate', '/trashed')
	}
})

const newNote = new TouchBarButton({
	label: '✎',
	click: () => {
		// webContents.send('list:navigate', '/home')
		// webContents.send('top:new-note')
	}
})

const tb = new TouchBar([
	allNotes,
	starredNotes,
	trash,
	new TouchBarSpacer({ size: 'small' }),
	newNote
])

export default tb