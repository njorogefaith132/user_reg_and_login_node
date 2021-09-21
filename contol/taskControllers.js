
// const gentoken = require('../helpers/generateToken');
const db = require('../db/dbConnection');




module.exports = {
    create: async (projectname,task) =>{
        
        try {
    
            let results = await db
            .exec("postTask" ,{projectname,task})
    
             console.log(results.recordset);
         } catch (error) {
            console.log(error.message);
         }

    },

    getOneTask : async (task) =>{
    
        try {
    
            let results = await db
            .exec("getTask", { task})
    
             console.log(results.recordset);
         } catch (error) {
            console.log(error.message);
         }


    },
    deleteTask : async (task) =>{

        try {
    
            let results = await db
            .exec("deleteTask", {task})
    
             console.log(results.recordset);
         } catch (error) {
            console.log(error.message);
         }


    },
    updateTask : async (taskid, task) =>{
        try {
    
            let results = await db
            .exec("updateTask", {taskid,task})
    
             console.log(results.recordset);
         } catch (error) {
            console.log(error.message);
         }

    }
    

}

