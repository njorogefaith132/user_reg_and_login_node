const conn = require('../config/db');
const Joi = require('joi');

module.exports = {
    create: async (req, res) =>{   
        const schema = Joi.object().keys({
            task: Joi.string().min(5).required(),
            project_id: Joi.number().required()
        })

        const {error} = schema.validate(req.body)
        if(error){
            return res.status(400).send({message: error.details[0].message});
        }
        
        const {project_id, task} = req.body;

        conn.query("SELECT * FROM project.project_list where project_id = ? LIMIT 1",[project_id], async (err, result) =>{
            if(err){
                return res.status(400).json(err.message);
            }
            if(!result[0]) return res.status(400).json({message:"Project does not exists"})
    

            conn.query('INSERT INTO project.tasks (task, project_id) values (?,?)', [task, project_id], async (err, result) =>{
                if(err){
                    return res.status(400).json(err.message);
                }
                
                conn.query("SELECT * FROM project.tasks WHERE task = ?",[task], (err, result)=>{
                    if(err){
                        return res.status(400).json(err.message);
                    }
                    const project = result[0];
    
                    res.json({project});
                })
            })
        })
    
         
        
    },

    getOne: (req, res) =>{
        const {task} = req.params;         
        conn.query("SELECT * FROM project.tasks where task = ? LIMIT 1",[task], async (err, result) =>{
                if(err){
                    console.log(err);
                    return res.json(err.message);
                }
                res.json({project: result[0]});
            })
    },
    
    deleteTask: (req,res) =>{
        const {task} = req.body

        conn.query("SELECT * FROM project.tasks where task = ? LIMIT 1",[task], async (err, result) =>{
            if(err){
                console.log(err);
                return res.json(err.message);
        
            }

            if(!result[0]) return res.status(400).json({message:"Task does not exists"})

    
            conn.query('DELETE FROM project.tasks WHERE task=? ' , [task] , async(err, result) =>{
        
                if(err){
                    console.log(err);
                    return res.json(err.message);
                }


                res.json({message: "Task deleted successfully"})
        
            })
    })
    },

    updateTask: async (req,res) =>{
        const {id, task} = req.body
    
        conn.query('UPDATE project.tasks SET task = ? WHERE task_id = ? ' , [task, id] , async(err, result) =>{
    
            if(err){
                console.log(err);
                return res.json(err.message);
            }
           

            conn.query("SELECT * FROM project.tasks WHERE task_id = ?",[id], (err, result)=>{
                if(err){
                    return res.status(400).json(err.message);
                }
                if(!result[0]) return res.status(400).json({message:"Task does not exists"})


            res.json({message: "Task updated successfully", task : result[0]})
            })
        })
    },
}