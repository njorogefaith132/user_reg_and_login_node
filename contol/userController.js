// const bcrypt = require('bcrypt');
// const db = require('./db/dbConnection');
// const gentoken = require('../helpers/generateToken');
// const Joi = require('joi');
const db = require('../db/dbConnection');




module.exports ={
    login: async(username) =>{
        try {
    
            let results = await db
            .exec("getUser" ,{username})
    
             console.log(results.recordset);
         } catch (error) {
            console.log(error.message);
         }

    },

    register : async (username, password, project_name) =>{

        try {
    
            let results = await db
            .exec("postUsers", {username, password,project_name})
    
             console.log(results.recordset);
         } catch (error) {
            console.log(error.message);
         }


    },
    deleteUser : async (username) =>{

        try {
    
            let results = await db
            .exec("deleteUser", {username})
    
             console.log(results.recordset);
         } catch (error) {
            console.log(error.message);
         }


    }
    

}

