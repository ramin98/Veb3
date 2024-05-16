const fs = require('fs')
const express = require('express')

// fs.readFile('./text.txt', 'utf8', (err, data) => {
//      if(err){
//        console.log(err)
//      }

//      let text = data.split(' ').filter((item) => item === 'York').join(' ')
//      fs.writeFile('./filtered.txt', text, (err) => {
//         if(err){
//             console.log(err)
//         }
//      })
// })

// fs.readFile('./data.json', 'utf8', (err, data) => {
//     if(err){
//       console.log(err)
//     }
//     let parsedData = JSON.parse(data)
//     console.log(parsedData)
//     parsedData.push({
//        "id": parsedData[parsedData.length - 1].id + 1,
//        "name": "Ramin",
//        "username": "ramin98",
//        "email": "ramin@gmail.com",
//        "address": {
//            "street": "Kattie Turnpike",
//            "suite": "Suite 198",
//            "city": "Lebsackbury",
//            "zipcode": "31428-2261",
//            "geo": {
//                "lat": "-38.2386",
//                "lng": "57.2232"
//            }
//        },
//        "phone": "024-648-3804",
//        "website": "ambrose.net",
//        "company": {
//            "name": "Hoeger LLC",
//            "catchPhrase": "Centralized empowering task-force",
//            "bs": "target end-to-end models"
//        }
//    })
//     fs.writeFile('./data.json', JSON.stringify(parsedData), (err) => {
//        if(err){
//            console.log(err)
//        }
//     })
// })

// fs.readFile('./workers.json','utf8', (err, data) => {
//     if(err){
//         console.log(err)
//     }
//     let parsedData = JSON.parse(data)
//     parsedData.sort((a,b) => a.age - b.age)
//     let len = Math.floor(parsedData.length / 2)
//     let avarageWorker = parsedData[len]
//     fs.writeFile('./worker.txt', JSON.stringify(avarageWorker), (err) => {
//         if(err){
//             console.log(err)
//         }
//     })
// })
const cors = require('cors')
const bodyParser = require('body-parser')

let app = express()
app.use(cors())
app.use(bodyParser.json())

const HOST = 5000

app.get('/workers', (req, res) => {
    fs.readFile('./users.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err)
        }
        let parsedData = JSON.parse(data)
        res.json(parsedData)
    })

})

app.get('/search', (req, res) => {
    let formQuery = req.query.from
    let toQuery = req.query.to
    console.log(formQuery, toQuery)
    fs.readFile('./users.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err)
        }
        let parsedData = JSON.parse(data)
        if (formQuery && toQuery) {
            parsedData = parsedData.filter((item) => item.from.startsWith(formQuery) && item.to.startsWith(toQuery))
        } else if (!toQuery) {
            parsedData = parsedData.filter((item) => item.from.startsWith(formQuery))
        } else if (!formQuery) {
            parsedData = parsedData.filter((item) => item.to.startsWith(toQuery))
        }
        res.json(parsedData)
    })

})

app.post('/add-user', (req, res) => {

    fs.readFile('./users.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err)
        }
        let parsedData = JSON.parse(data)
        console.log(parsedData)
        let user = req.body
        if (parsedData.length === 0) {
            user = { ...user, id: 1 }
        } else {
            user = { ...user, id: parsedData.at(-1).id + 1 }
        }

        parsedData.push(user)
        fs.writeFile('./users.json', JSON.stringify(parsedData), (err) => {
            if (err) {
                console.log(err)
            }
        })
    })

})

app.delete('/delete-user/:id', (req, res) => {
    let id = req.params.id
    fs.readFile('./users.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err)
        }
        let parsedData = JSON.parse(data)
        console.log(parsedData)
        parsedData = parsedData.filter((item) => item.id != id)
        fs.writeFile('./users.json', JSON.stringify(parsedData), (err) => {
            if (err) {
                console.log(err)
            }
        })
    })
})

app.put('/change-user/:id', (req, res) => {
    let id = req.params.id
    let fromUser = req.body.from
    let toUser = req.body.to
    console.log(id)
    console.log(value)
    fs.readFile('./users.json', 'utf-8', (err, data) => {
        if (err) {
            console.log(err)
        }
        let parsedData = JSON.parse(data)
        console.log(parsedData)
        let objectIndex = parsedData.findIndex((item) => item.id == id)
        parsedData[objectIndex].from = fromUser
        parsedData[objectIndex].to = toUser

        fs.writeFile('./users.json', JSON.stringify(parsedData), (err) => {
            if (err) {
                console.log(err)
            }
        })
    })
})

app.listen(HOST, (err) => {
    if (err) {
        console.log(err)
    }
    console.log('localhost:' + HOST)
})
