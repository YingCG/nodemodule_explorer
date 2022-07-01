const express = require('express')
const app = express()

app.get('/cat', (req,res) => {
    res.send(`
        <img src='https://resources.stuff.co.nz/content/dam/images/4/y/y/e/e/d/image.related.StuffLandscapeThreeByTwo.1464x976.24hksv.png/1651210185860.jpg' width='100%'>
    `)
})

app.get('/dog', (req,res) => {
    res.send(`
        <img src='https://www.science.org/do/10.1126/science.abi5787/abs/main_puppies_1280p.jpg' width='100%'>
    `)
})

app.listen(4003)