import R from 'ramda'
import { remote } from 'electron';
import path from 'path';

const { app } = remote

// The env is static.  It never changes when running in dev mode or in production mode.
const env = process.env.NODE_ENV
export const isInProduction 	= R.equals('production')
export const isInDevMode 		= R.anyPass([R.equals('dev'), R.isEmpty])

export const getPathForLive 	= R.memoizeWith(R.identity, f => path.join(app.getAppPath(), f))
export const getPathForLocal 	= R.memoizeWith(R.identity, path.resolve)
export const getPathFor 		= p => isInProduction(env) ? getPathForLive(p) : getPathForLocal(p)

export const languagesPath 		= R.memoizeWith(R.identity, getPathFor('./languages'))