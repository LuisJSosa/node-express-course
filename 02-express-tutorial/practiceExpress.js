const log = require('./practice-middleware')
const express = require('express')
const app = express()
const PORT = 3000

app.use(log)

app.get('/', (req, res) => {
    res.status(200).sendFile('new-public/index.html', { root: __dirname });
    console.log('index html page was sent to server')
} )

app.get('/sample', (req, res) => {
    console.log('user hit the resource')
   res.status(200).send('This is working')
} )

app.all('*', (req, res) => {
    res.status(404).send('<h1>resource not found</h1>')
} )
 
app.listen(PORT, (req, res) => {
    console.log(`server listening on port ${PORT}...`)
} )

