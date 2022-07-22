const Task = require('../models/Task')

// app.get('/api/v1/tasks') - get all the tasks
const getAllTasks = (req, res) =>{
    res.send('Get All Tasks')
}
// app.post('/api/v1/tasks') - create a new task
const createTask = async (req, res) =>{
    const task = await Task.create(req.body)
    res.status(201).json({ task })
}
// app.get('/api/v1/tasks:id') - get single task
const getTask = (req, res) =>{
    res.json({id:req.params.id})
}
// app.patch('/api/v1/tasks:id') - update a task
const updateTask = (req, res) =>{
    res.send('Update task')
}
// app.delete('/api/v1/tasks:id') - delet task
const deleteTask = (req, res) =>{
    res.send('Delete task')
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}





