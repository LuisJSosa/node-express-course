const express = require('express')
const app = express()
const PORT = 3000

app.get('./new-public', (req,res)=>{
    res.status(200).render('index.html')
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




