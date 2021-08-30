require('dotenv').config();
const express = require('express');
const newPass = require('./helpers/hash');
const conn = require('./config/db')
const generateToken = require('./helpers/generateToken')

const app = express();

const port =  5000

app.use(express.urlencoded({extended : false}));

app.use(express.json());

app.post('/user', async (req, res) =>{   
    const {username, password, project_name} = req.body;
    const pass =  await newPass(password);
    conn.query('INSERT INTO user (username, password, project_name) values (?,?,?)', [username, pass, project_name], (err, result) =>{
            if(err){
                console.log(err);
                return res.json(err.message);
            }
            conn.query("SELECT * FROM user WHERE username = ?",[username], (err, result)=>{
                if(err){
                    console.log(err);
                    return res.json(err.message);
                }
                const user = result[0];
                const token = generateToken(user.id);
                res.json({user, token});
            })
        })
})

app.get('/user') ,



app.listen(port, ()=>{
    console.log(`The app is listening from port ${port}`)
})