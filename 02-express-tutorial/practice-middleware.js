const express = require('express')
const app = express()

const consoleLog = (req, res, next)=>{
  console.log('This is a statement inside consoleLog')
  next()
}

app.listen(3000)

module.exports = consoleLog

