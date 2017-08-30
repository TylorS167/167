const { join } = require('path')
const { readdirSync } = require('fs')

const { generateDocs } = require('./docs/generateDocs')

const ROOT_DIRECTORY = join(__dirname, '..')

console.log()
console.log('Building documentation...')

generateDocs(ROOT_DIRECTORY)

console.log('Done!')
