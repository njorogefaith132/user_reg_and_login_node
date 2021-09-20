const bcrypt = require('bcrypt');
const conn = require('../config/db');
const gentoken = require('../helpers/generateToken');
const Joi = require('joi');

module.exports = {
    create: async (req, res) =>{   
            const schema = Joi.object().keys({
            username: Joi.string().min(6).required(),
            password: Joi.string().min(8).required()
        })

        const {error} = schema.validate(req.body)
        if(error){
            return res.status(400).send({message: error.details[0].message});
        }
        
        const {username, password} = req.body;
        
        const salt = await bcrypt.genSalt(10);
        const pass =  await bcrypt.hash(password, salt);
          conn.query("SELECT * FROM users.user_list where username = ? LIMIT 1",[username], async (err, result) =>{
            if(err){
                return res.status(400).json(err.message);
            }
            if(result[0]) return res.status(400).json({message:"User exists"})
            
            conn.query('INSERT INTO users.user_list (username, password) values (?,?)', [username, pass], async (err, result) =>{
                if(err){
                    return res.status(400).json(err.message);
                }
                
                conn.query("SELECT * FROM users.user_list WHERE username = ?",[username], (err, result)=>{
                    if(err){
                        return res.status(400).json(err.message);
                    }
                    const user = result[0];
                    const token = gentoken(user.id)
    
                    res.json({user, token});
                })
            })
        })
    
         
        
    },

    getOne: (req, res) =>{
        const {username} = req.params;         
        conn.query("SELECT * FROM users.user_list where username = ? LIMIT 1",[username], async (err, result) =>{
                if(err){
                    console.log(err);
                    return res.json(err.message);
                }
                res.json({user: result[0]});
            })
    },
    

    loginUser: async (req, res) =>{
        const schema = Joi.object().keys({
            username: Joi.string().min(6).required(),
            password: Joi.string().min(8).required(),
        })

        const {error} = schema.validate(req.body)
        if(error){
            return res.status(400).send({message: error.details[0].message});
        }
        const {username, password } = req.body
          conn.query('SELECT * FROM users.user_list WHERE username = ? ',[username, password] ,async (err, result)=>{
            if(err){
                console.log(err);
                return res.json(err.message);
            }
            const user =  result[0]
             if(!user){
                 return res.json({message: "Account does not exist"})
             }
             const validPass =   await bcrypt.compare(password, user.password);    
             if(!validPass) return res.json({message: "Invalid credentials"})
    
           
             const token = gentoken(user.id)
               
             res.status(200).json({user, token});
    
            
        })
    },
    deleteUser: (req,res) =>{
        const {username} = req.body
    
        conn.query('DELETE FROM users.user_list WHERE username=? ' , [username] , async(err, result) =>{
    
            if(err){
                console.log(err);
                return res.json(err.message);
            }
            res.json({message: "User deleted successfully"})
    
        })
    },

    updateUser: async (req,res) =>{
        const {id, username, password} = req.body
        const salt = await bcrypt.genSalt(10);
        const pass =  await bcrypt.hash(password, salt);
    
        conn.query('UPDATE users.user_list SET username = ? , password = ? WHERE username = ? ' , [username, pass, id] , async(err, result) =>{
    
            if(err){
                console.log(err);
                return res.json(err.message);
            }
            conn.query("SELECT * FROM users.user_list WHERE username = ?",[username], (err, result)=>{
                if(err){
                    return res.status(400).json(err.message);
                }

            res.json({message: "User updated successfully", user : result[0]})
            })
        })
    },
}