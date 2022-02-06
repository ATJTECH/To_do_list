const mongoose = require('mongoose')
var taskSchema = new mongoose.Schema({
    taskname:{
        type: String
    },
    taskDesc :{
        type : String
    }
})

 mongoose.model('task',taskSchema) 