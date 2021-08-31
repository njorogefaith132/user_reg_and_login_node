// const bcrypt = require('bcrypt');
// const hashPasswords = require('../helpers/hash');
const conn = require('../config/db');
const Joi = require('joi');

module.exports = {
    create: async (req, res) =>{   
        const schema = Joi.object().keys({
            task: Joi.string().min(5).required()
        })

        const {error} = schema.validate(req.body)
        if(error){
            return res.status(400).send({message: error.details[0].message});
        }
        
        const {task} = req.body;
        //   conn.query("SELECT * FROM  where id = ? ",[id], async (err, result) =>{
        //     if(err){
        //         return res.status(400).json(err.message);
        //     }
        //     if(!result[0]) return res.status(401).json({message:"Please Create Account"})

            conn.query('INSERT INTO project_tasks (task) values (?)', [task], async (err, result) =>{
                if(err){
                    return res.status(400).json(err.message);
                }
                
                conn.query("SELECT * FROM project_tasks WHERE task = ?",[task], (err, result)=>{
                    if(err){
                        return res.status(400).json(err.message);
                    }
                    const project = result[0];
    
                    res.json({project});
                })
            })
        // })
    
         
        
    },

    getOne: (req, res) =>{
        const {task} = req.params;         
        conn.query("SELECT * FROM project_tasks where task = ? LIMIT 1",[task], async (err, result) =>{
                if(err){
                    console.log(err);
                    return res.json(err.message);
                }
                res.json({project: result[0]});
            })
    },
    
    deleteTask: (req,res) =>{
        const {task} = req.body
    
        conn.query('DELETE FROM project_tasks WHERE task=? ' , [task] , async(err, result) =>{
    
            if(err){
                console.log(err);
                return res.json(err.message);
            }
            res.json({message: "Task deleted successfully"})
    
        })
    },

    updateTask: async (req,res) =>{
        const {id, task} = req.body
    
        conn.query('UPDATE project_tasks SET task = ? WHERE task_id = ? ' , [task, id] , async(err, result) =>{
    
            if(err){
                console.log(err);
                return res.json(err.message);
            }
            conn.query("SELECT * FROM project_tasks WHERE task = ?",[task], (err, result)=>{
                if(err){
                    return res.status(400).json(err.message);
                }

            res.json({message: "Task updated successfully", project : result[0]})
            })
        })
    },
}