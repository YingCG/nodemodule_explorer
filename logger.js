const EventEmitter = require('events')
const emitter = new EventEmitter()

//(function (exports, require, module, __filename, __dirname){

// console.log(__filename)
// console.log(__dirname)

var url = 'http://mylogger.io/log'

function log(message) {
  //send an HTTP request
  console.log(message)

  emitter.emit('messageLogged', {id : 1, url: 'http://'})
}

//module.exports.log = log;
module.exports = log;

//module.exports.url = url;  
//})
