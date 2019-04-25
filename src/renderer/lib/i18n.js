import { locales } from './languages.js'
import { languagesPath } from './utils'

const i18n = new (require('i18n-2'))({
	// setup some locales - other locales default to the first locale
	locales: 	locales,
	extension: 	'.json',
	directory: 	languagesPath(),
	devMode: 	false
})

export default i18n