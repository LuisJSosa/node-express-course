const express = require('express')
const app = express()
const PORT = 5000

app.get('/', (req, res) => {
    console.log('user hit the resource')
   res.status(200).send('Home Page')
} )

app.get('/about', (req, res) => {
    res.status(200).send('About Page')
} )

app.all('*', (req, res) => {
    res.status(404).send('<h1>resource not found</h1>')
} )
 
app.listen(PORT, (req, res) => {
    console.log(`server listening on port ${PORT}...`)
} )

// app.get ==> read data
// app.post ==> insert/create new data
// app.put ==> update existing data
// app.delete ==> delete existing data
// app.all
// app.use ==> used for middleware
// app.listen ==> wait for server signal and react, on designated port


