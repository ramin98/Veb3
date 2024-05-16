const cors = require('cors')
const express = require('express')
const data = require('./data')
const bodyParser = require('body-parser')

let app = express()
app.use(cors())
app.use(bodyParser.json())

const HOST = 5000

app.get('/pagination', (req,res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = 50;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
  
    const paginatedItems = data.slice(startIndex, endIndex);
    const totalItems = data.length;
    const totalPages = Math.ceil(totalItems / limit);
  
    res.json({
      items: paginatedItems,
      totalItems,
      totalPages,
      currentPage: page,
    });
})

app.listen(HOST, (err) => {
    if (err) {
        console.log(err)
    }
    console.log('localhost:' + HOST)
})
