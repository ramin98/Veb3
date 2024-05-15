const fs = require('fs')

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

fs.readFile('./data.json', 'utf8', (err, data) => {
    if(err){
      console.log(err)
    }
    let parsedData = JSON.parse(data)
    console.log(parsedData)
    parsedData.push({
       "id": parsedData[parsedData.length - 1].id + 1,
       "name": "Ramin",
       "username": "ramin98",
       "email": "ramin@gmail.com",
       "address": {
           "street": "Kattie Turnpike",
           "suite": "Suite 198",
           "city": "Lebsackbury",
           "zipcode": "31428-2261",
           "geo": {
               "lat": "-38.2386",
               "lng": "57.2232"
           }
       },
       "phone": "024-648-3804",
       "website": "ambrose.net",
       "company": {
           "name": "Hoeger LLC",
           "catchPhrase": "Centralized empowering task-force",
           "bs": "target end-to-end models"
       }
   })
    fs.writeFile('./data.json', JSON.stringify(parsedData), (err) => {
       if(err){
           console.log(err)
       }
    })
})