const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()

// routes
app.get('/hello', (req, res, next) => {
    res.send('Task Manager App')
})

app.use('/api/v1/tasks', tasks)

// routes:
// app.get('/api/v1/tasks') - get all the tasks
// app.post('/api/v1/tasks') - create a new task
// app.get('/api/v1/tasks:id') - get single task
// app.patch('/api/v1/tasks:id') - update a task
// app.delete('/api/v1/tasks:id') - delet task 

const port = 3000

const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening to Port: ${port}...`))

    } catch(error){
        console.log(error)
    }
}

start()


