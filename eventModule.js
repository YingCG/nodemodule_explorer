const EventEmitter = require('events');

const emitter = new EventEmitter()

// Register a listner
/*
emitter.on('messageLogged', function(arg){
  console.log('listener called', arg)
}) */

emitter.on('messageLogged', (arg) => {
  console.log('listener called', arg)
})

emitter.on('loggingDta', (arg) => {
  console.log('data listening', art)
})
// Raise an event
//emit mean --> making a noise, produce something
emitter.emit('messageLogged', {id: 1, url: 'http://'})

// Raise: Loging (data: message)
emitter.emit('loggingDta', {title: 'Kiora', content:'Hello'})

