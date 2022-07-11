const path = require('path')
const express = require('express')

const app = express()
const PORT = 5000

// setup static and middleware
app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})

app.all('/', (req, res) => {
    res.status(404).send('resource not found')
})

app.listen(PORT, ()=>{
    console.log(`server is listening on port ${PORT}...`)
})
