require('./models/db.js')
const express =require('express')
const taskcontroller = require(''./controllers/taskcontroller')
const path=require('path')
const exphbs=require('express-handlebars')

var app=express();
app.set('views',path.join(__dirname,'/views/'))
app.engine('hbs' , exphbs.engine({extname:'hbs',defaultLayout:'mainLayout',layoutsDir :__dirname +'/views/layouts'}))
app.set('view engine','hbs')
app.listen(7000,()=>{
    console.log('express server started')
})
app.use('/task',taskcontroller)