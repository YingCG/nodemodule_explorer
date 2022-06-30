const fs = require('fs')

const newUser =  {"id" : "w003","name" : "Jimmy"}
const stringUser = fs.readFileSync('users.json', 'utf-8')
const users = JSON.parse(stringUser)
console.log(users)

function addUser(newUserData){
    users.push(newUserData)
}

addUser(newUser)

fs.writeFile('users.json', JSON.stringify(users), (error) => {
    if(error){
     console.log(error.message)
    } else {
        console.log("User Details added successfully")
    }
})
