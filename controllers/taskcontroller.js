const express = require('express')
var router =express.Router()

router.get('/',(req,res)=>{
    res.render('task/addEdit',{
        viewTitle : "update your to do list"

    })

})
module.exports =router;