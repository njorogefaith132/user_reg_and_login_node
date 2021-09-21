require('dotenv').config();
const express = require('express');
const dbope = require('./contol/userController');
const app = express();


const user = require('./routes/user');
const projects = require('./routes/projects');
const tasks = require('./routes/task');



// const User = require('./classes/user')

app.use(express.urlencoded({extended : false}));
app.use(express.json());

app.use('/users',  user)
app.use('/user/project' , projects)





const port =  5001
app.listen(port, ()=>{
    console.log(`The app is listening from port ${port}`)
})
