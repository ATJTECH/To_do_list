const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://user1:user1@mytaskapp.7e09q.mongodb.net/Mytaskapp?retryWrites=true&w=majority' , {useNewUrlParser : true} , (err)=>{
    if (!err)
    {
        console.log('mongodb successfully connected')
    }
    else
    console.log('error in mongodb:'+err)
})


require('./task.model')