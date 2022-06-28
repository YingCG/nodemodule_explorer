/*function sayHello(name) {
  console.log("hello " + name )
}

sayHello('Mosh') */
//console.log(module)
//const logger = require('./logger')

//logger.log('message')
//logger('message')

const os = require('os')

var totalMemory = os.totalmem()
var freeMemory = os.freemem()

console.log(`Total memory: ${totalMemory}`)
console.log(`Free memory: ${freeMemory}`)