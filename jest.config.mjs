/** @typedef {import('ts-jest')} */
/** @type {import('@jest/types').Config.InitialOptions} */

export default {
	preset: 'ts-jest',
	setupFilesAfterEnv: [
		'./jest/setup-after-env.js'
	],
	globals: {
		'ts-jest': {
			packageJson: 'package.json',
		}
	}
}
