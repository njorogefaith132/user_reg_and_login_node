const express = require("express")
const router = express.Router()
const verifyToken = require('../middleware/auth');

const {create, getOneProject, deleteProject, updateProject}  = require('../contol/projectControllers')


router.post('/create',verifyToken, (req, res)=>{
    create(
         req.body.projectname,
         req.body.username,
         req.body.project_description ,(error, message) => {
            if (error) return res.status(200).send({ message: error });
            res.send({ message});
    
          });

         
})  


router.get('/project',verifyToken, (req, res)=>{
    getOneProject(
         req.body.project_name,(error, message) => {
            if (error) return res.status(200).send({ message: error });
            res.send({ message});
    
          });
}) 


router.delete('/project',verifyToken, (req, res)=>{
    deleteProject(
         req.body.project_name,(error, message) => {
            if (error) return res.status(200).send({ message: error });
            res.send({ message});
    
          });
})  


router.put('/project',verifyToken, (req, res)=>{
    updateProject(
         req.body.projectname,
         req.body.projectid,
         req.body.project_description

         )
})  



module.exports = router;
