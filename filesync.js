const fs = require('fs')

const fileContents = fs.readFileSync('./content/example.txt', 'utf-8')
console.log(fileContents)
console.log('one more line')