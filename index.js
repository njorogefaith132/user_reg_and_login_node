require('dotenv').config();
const express = require('express');
const dbope = require('./contol/userController');
const app = express();

// const userRoute = require('./routes/user')
// const projectRoute = require('./routes/projects')
// const taskRoute = require('./routes/task');
// const db = require('./db/dbConnection');
// const user = require('./contol/userController');
// const dbquery = require('./db/getusers');

const user = require('./routes/user');

const User = require('./classes/user')

app.use(express.urlencoded({extended : false}));
app.use(express.json());

// app.use('/login', login);
// app.use('/project', projectRoute);
// app.use('/tasks', taskRoute);
app.use('/users',  user)



// router.route("/login/:username").get((req, res) =>{
//     dbope.getUser(req.params.username).then(result =>{
//         console.log(result);
//         res.json({result})
//     })

// })





const port =  5001
app.listen(port, ()=>{
    console.log(`The app is listening from port ${port}`)
})
