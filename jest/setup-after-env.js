require = require("esm")(module, {
	await: true,
	wasm: true,
	cache: process.env.NODE_ENv !== 'development',
	sourceMap: process.env.NODE_ENV === 'development',
})
require('jest-extended')

process.on('unhandledRejection', (err) => console.error(err))
process.on('uncaughtException', (err) => console.error(err))
