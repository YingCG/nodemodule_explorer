const fs = require('fs')

//const files = fs.readdirSync('./')
//console.log(files)

//use async is better
fs.readdir('./', function(err, files){
  if (err) console.log('Error', err)
  else console.log('Result', files)
})
