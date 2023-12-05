import fs from 'fs'

import path from 'path'

const inputFile = path.resolve('./input.txt')
const input = fs.readFileSync(inputFile, 'utf8')

const lines = input.split(/\r?\n/)

lines.map(console.log)

