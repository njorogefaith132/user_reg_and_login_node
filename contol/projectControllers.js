
// const gentoken = require('../helpers/generateToken');
const db = require('../db/dbConnection');




module.exports ={
    create: async(project_name,username,project_description) =>{
        
        try {
    
            let results = await db
            .exec("createProject" ,{project_name,username,project_description})
    
             console.log(results.recordset);
         } catch (error) {
            console.log(error.message);
         }

    },

    getOneProject : async (projectname) =>{
    
        try {
    
            let results = await db
            .exec("getProject", { projectname})
    
             console.log(results.recordset);
         } catch (error) {
            console.log(error.message);
         }


    },
    deleteProject : async (projectname) =>{

        try {
    
            let results = await db
            .exec("deleteProject", {projectname})
    
             console.log(results.recordset);
         } catch (error) {
            console.log(error.message);
         }


    },
    updateProject : async (projectname, projectid, project_description) =>{
        try {
    
            let results = await db
            .exec("deleteProject", {projectname, projectid,project_description})
    
             console.log(results.recordset);
         } catch (error) {
            console.log(error.message);
         }

    }
    

}

