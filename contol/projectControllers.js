
// const gentoken = require('../helpers/generateToken');
const db = require('../db/dbConnection');




module.exports ={
    create: async(projectname,username,project_description, done) =>{
        
        try {
    
            let results = await db
            .exec("createProject" ,{projectname,username,project_description})
    
             console.log(results.recordset);
             const project = results.recordset[0]
             
      done(null, { message: "Project Created successfully",project});

         } catch (error) {
            done(error.message);
         }

    },

    getOneProject : async (projectname, done) =>{
    
        try {
    
            let results = await db
            .exec("getProject", { projectname})
    
             console.log(results.recordset);
             const project = results.recordset[0]
             done(null, {project})
         } catch (error) {
            done(error.message);
         }


    },
    deleteProject : async (projectname, done) =>{

        try {
    
            let results = await db
            .exec("deleteProject", {projectname})
    
             console.log(results.recordset);
             done(null, {messsage : "Project deleted Successfully"})
         } catch (error) {
            done(error.message);
         }


    },
    updateProject : async (projectname, projectid, project_description, done) =>{
        try {
    
            let results = await db
            .exec("updateProject", {projectname, projectid,project_description})
    
             console.log(results.recordset);
             const project = results.recordset[0]
             done(null, {message: "Project Details Updated Successfully", project})
         } catch (error) {
            done(error.message);
         }

    }
    

}

