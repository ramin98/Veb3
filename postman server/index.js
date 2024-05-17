const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
let app = express()
app.use(cors())
app.use(bodyParser.json())
const HOST = 5000

let arr = [{ userName: 'Sam', address: 'New-York', id: 1 }]

app.get('/getUsers', (req, res) => {
    if (arr.length === 0) {
        res.status(404).send('Array is empty')
    } else {
        res.json(arr)
    }
})

app.post('/addUsers', (req, res) => {
    let addedUser = req.body
    console.log(addedUser)
    if (addedUser.hasOwnProperty('userName') &&
        addedUser.hasOwnProperty('address') &&
        Object.keys(addedUser).length <= 2
    ) {
        if (arr.length === 0) {
            addedUser = { ...addedUser, id: 1 }
        } else {
            addedUser = { ...addedUser, id: arr.at(-1).id + 1 }
        }
        arr.push(addedUser)
        res.send(`Object with name ${addedUser.userName} is added in array`)
    } else {
        res.send(`Object has not valid format`)
    }
})

app.delete('/deleteUser/:id', (req, res) => {
    let id = req.params.id
    let arrayHasId = arr.some((item) => item.id == id)
    if (arr.length === 0) {
        res.send('Array is empty')
    } else if (!arrayHasId) {
        res.send(`id with value ${id} has not in array`)
    } else {
        let id = req.params.id
        let indexOfUser = arr.findIndex((item) => item.id == id)
        arr.splice(indexOfUser, 1)
        res.send(`object with id ${id} was deleted`)
    }
})

app.put('/changeUser/:id', (req, res) => {
    let id = req.params.id
    let changingData = req.body
    let userIndex = arr.findIndex((item) => item.id == id)
    let arrayHasId = arr.some((item) => item.id == id)
    if (!arrayHasId) {
        res.send(`Array has not this object with id ${id}`)
    } else if (changingData.userName && changingData.address) {
        arr[userIndex] = {...changingData,userName: changingData.userName, address:changingData.address}
        res.send(`user name and address of object with id ${id} was changed`)
    } else if (!changingData.userName && !changingData.address) {
        res.send(`Object has not value`)
    } else if (!changingData.userName) {
        arr[userIndex] = {...changingData,address:changingData.address}
        res.send(`address of object with id ${id} was changed`)
    } else if (!changingData.address) {
        arr[userIndex] = {...changingData,userName: changingData.userName}
        res.send(`user name of object with id ${id} was changed`)
    }
})

app.patch('/changeDirectlyUser/:id', (req, res) => {
    let id = req.params.id
    let changingData = req.body
    let userIndex = arr.findIndex((item) => item.id == id)
    let arrayHasId = arr.some((item) => item.id == id)
    if (!arrayHasId) {
        res.send(`Array has not this object with id ${id}`)
    }else if (changingData.userName && changingData.address) {
        arr[userIndex].userName = changingData.userName
        arr[userIndex].address = changingData.address
        res.send(`user name and address of object with id ${id} was changed`)
    } else if (!changingData.userName && !changingData.address) {
        res.send(`Object has not value`)
    }else if (!changingData.userName) {
        arr[userIndex].address = changingData.address
        res.send(`address of object with id ${id} was changed`)
    } else if (!changingData.address) {
        arr[userIndex].userName = changingData.userName
        res.send(`user name of object with id ${id} was changed`)
    }
})

app.listen(HOST, (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(`localhost:${HOST}`)
})