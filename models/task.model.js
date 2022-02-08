const mongoose=require('mongoose');


const taskSchema=new mongoose.Schema({
    taskName:{
        type:String,
     
    },
    taskDescription:{
        type:String
    }
})


mongoose.model('Task',taskSchema)










// const mongoose = require('mongoose')
// var taskSchema = new mongoose.Schema({
//     taskName:{
//         type: String
//     },
//     taskDesc :{
//         type : String
//     }
// })

//  mongoose.model('Task',taskSchema) 