const fs = require('fs')

fs.readFile('./content/example.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err)
    } else{
        console.log(data)
    }
})

fs.writeFile('./content/example.txt', 'We are just adding this data to the text file\n', (err) => {
    if (err){
        console.log(err)
    } else{
        console.log('data added!')
    }
})

//this line appear first as above is asynchronously
console.log('Last line is appearing')