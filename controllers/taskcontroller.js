const express = require('express')
var router =express.Router()
const mongoose= require('mongoose')
const task =mongoose.model('Task')
router.get('/',(req,res)=>{
    res.render('task/addEdit',{
        viewTitle : "update your to do list"

    })
})
router.post('/',(req,res)=>{
    addTask(req,res);
})
//function to add task
function addTask(req,res){
    var Task=new task ()
    Task.taskName=req.bodytaskName;
    Task.taskDesc=req.body.taskDesc;
    Task.save((err,docs))=>{
        if (!err)
        {
            res.redirect("task/list")
        }
        else
        {
            console.log("error while saving"+err); 
        }
    })
}
//to display

router.get('/list',(req,res)=>{
   Task.find((err,docs)=>{
       if(!err)
       {
           res.render('task/list' , list: docs.map(docs=>docs.toJASON()))
       }
   })
})
module.exports =router;