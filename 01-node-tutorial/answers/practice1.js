// Export sentence var from practice2:
const sentence = require('./practice2')

const os = require('os')
const fs = require('fs')

// instanciate the user name information from os module:
const user  =  os.userInfo().username

fs.writeFile('./content/practice.txt',
 `Here is the result: This is the sentence: >> "${sentence}" from user: ${user}`,
  (err)=>{
    if (err) throw err
    else{
        console.log('File created successfully')
    }
})


