require('dotenv').config();
const express = require('express');
const app = express();

// const userRoute = require('./routes/user')
// const projectRoute = require('./routes/projects')
// const taskRoute = require('./routes/task');
const db = require('./db/dbConnection');


app.use(express.urlencoded({extended : false}));
app.use(express.json());

// app.use('/users', userRoute);
// app.use('/project', projectRoute);
// app.use('/tasks', taskRoute);

app.get('/connect', async (req,res)=>{
    try {
        let results = await db.query("SELECT * FROM sales.orders");
    console.log(results);
    res.send(results.recordset)
    } catch (error) {
        console.log(error.message);
    }
    
})




const port =  5001
app.listen(port, ()=>{
    console.log(`The app is listening from port ${port}`)
})
