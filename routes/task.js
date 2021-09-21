const express = require("express")
const router = express.Router()

const { getOneTask , create, deleteTask, updateTask} = require("../contol/taskControllers")


router.post('/', verifyToken,(req, res)=>{
    create(
         req.body.projectname,
         req.body.task

         )
})  
router.get('/',verifyToken, (req, res)=>{
    getOneTask(
         req.body.task

         )
})  
router.delete('/',verifyToken, (req, res)=>{
    deleteTask(
         req.body.task
         )
})  
router.put('/', verifyToken, (req, res)=>{
    updateTask(
         req.body.taskid,
         req.body.task

         )
})  


module.exports = router