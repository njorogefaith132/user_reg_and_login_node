const express = require("express")
const router = express.Router()
const verifyToken = require('../middleware/auth');

const {create, getOneProject, deleteProject, updateProject}  = require('../contol/projectControllers')


router.post('/', verifyToken, (req, res)=>{
    create(
         req.body.project_name,
         req.body.username,
         req.body.project_description

         )
})  
router.get('/',verifyToken, (req, res)=>{
    getOneProject(
         req.body.project_name

         )
})  
router.delete('/',verifyToken, (req, res)=>{
    deleteProject(
         req.body.project_name,
         )
})  
router.put('/',verifyToken, (req, res)=>{
    updateProject(
         req.body.projectname,
         req.body.projectid,
         req.body.project_description

         )
})  



module.exports = router;
