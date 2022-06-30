const express = require('express')

const app = express();

app.get('/', (req, res) => {
    res.sendStatus(('Hello from the node.js server. you have visited /.'))
})

app.get('/car', (req, res) => {
    res.send('You have visited /car')
})

app.get('*', (req, res) => {
    res.send('You have visited an invalid routhe' + 
    req.method + req.path)
})

app.listen(4000)