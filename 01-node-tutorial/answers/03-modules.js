// Modules
const names = require('./04-names')
const sayHi = require('./05-utils')
const data = require('./06-alternative-flavor')
require('./07-mind-grenade') 
sayHi("Susan")
sayHi(names.john)
sayHi(names.peter)
 
sayHi(data.singlePerson.name)
sayHi(data.names.mark)