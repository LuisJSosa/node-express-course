const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')
const PORT = 5000
// req => middleware => res
app.use([logger, authorize])
// app get method ( path, middleware, callback function):
app.get('/', (req, res)=>{
    res.send('Home')
})
app.get('/about', (req, res)=>{
    res.send('About')
})
app.get('/api/products', (req, res)=>{
    res.send('Products')
})
app.get('/api/items', (req, res)=>{
    console.log(req.user)
    res.send('Items')
})

app.listen(PORT, (req, res)=>{
    console.log(`Server is listening on port ${PORT}...`)
})