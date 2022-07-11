const EventEmitter = require('events')

const customEventEmitter = new EventEmitter()

customEventEmitter.on('response', (name, id)=>{
    console.log(`data received user ${name} with id:${id}`)
})

customEventEmitter.on('response', ()=>{
    console.log(`some other logic here`)
})

customEventEmitter.emit('response','John', 34)
