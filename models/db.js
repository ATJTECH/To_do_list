const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://atjtech:<atjtech>@taskapp.kd5ki.mongodb.net/taskapp?retryWrites=true&w=majority' , {useNewUrlParser : true} , (err)=>{
    if (!err)
    {
        console.log('mongodb successfully connected')
    }
    else
    console.log('error in mongodb:'+err)
})


require('./task.model')