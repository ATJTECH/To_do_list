const express=require('express');
const res = require('express/lib/response');
const router=express.Router();
const mongoose=require('mongoose');
const Task=mongoose.model('Task')

router.get('/',(req,res)=>{
    res.render('./task/addEdit',{viewTitle:"Add task"})
})

//to display all tasks
router.get('/list',(req,res)=>{
    Task.find((err,docs)=>{
        if(!err){
            res.render("task/list",{
                list:docs.map(doc=>doc.toJSON()),
            })
        }
        else{
            console.log("Error in retrieving data")
        }
    })
})

//add a task
router.post('/add',(req,res)=>{
    addTask(req,res)
})
//function to add task
function addTask(req,res){
    var task=new Task();
    task.taskName=req.body.taskName;
    task.taskDescription=req.body.taskDescription;
    task.save((err,doc)=>{
        if(!err){
            res.redirect('task/list')
        }
        else{
            console.log("Error during insertion")
        }
    })
}



//delete a task
router.get('/delete/:id',(req,res)=>{
    Task.findByIdAndDelete(req.params.id,(err,doc)=>{
        if(!err){
            res.redirect('/task/list')
        }
        else{
            console.log("Error")
        }
    })
})

//edit

router.get('/edit/:id', (req, res) =>{
    Task.findById(req.params.id, function (err, doc) {
        if(!err) {
            res.render('task/edit', {task: doc.toJSON()})
        }
        else{
            console.log(err)
            res.redirect('/')
        }
    })
})

router.post('/edit/:id', (req, res)=>{
        editTask(req, res)
})

function editTask(req, res) {
        let update= {}
        update.taskName = req.body.EditTaskName
        update.taskDesc = req.body.EditTaskDesc

        Task.findByIdAndUpdate (req.params.id, update, function (err, doc) {
            if(!err) {
                res.redirect('/')
            }
            else{
                console.log(err);
                res.redirect('/')
            }
        })

  }


module.exports=router;












































































// const express = require('express')
// var router =express.Router()
// const mongoose= require('mongoose')
// const task =mongoose.model('Task')
// router.get('/',(req,res)=>{
//     res.render('task/addEdit',{
//         viewTitle : "update your to do list"

//     })
// })
// router.post('/',(req,res)=>{
//     addTask(req,res);
// })
// //function to add task
// function addTask(req,res){
//     var Task=new task()
//     Task.taskName=req.bodytaskName;
//     Task.taskDesc=req.body.taskDesc;
//     Task.save((err,docs)=>{
//         if (!err)
//         {
//             res.redirect("task/list")
//         }
//         else
//         {
//             console.log("error while saving"+err); 
//         }
//     })
// }
// //to display

// router.get('/list',(req,res)=>{
//    task.find((err,docs)=>{
//        if(!err)
//        {
//            res.render('task/list' ,{
//                list: docs.map(docs=>docs.toJASON())
//             })
//        }
//    })
// })

// //to delete

// router.get('/delete/id',(req,res)=>{
//     task.findByIdAndRemove(req.params.id,(err,docs)=>{
//         if(!err)
//         {
//             res.redirect('/task/list');
//         }
//         else
//         {
//             console.log('Error in deleting'+err)
//         }
//     })
// })
// module.exports =router;