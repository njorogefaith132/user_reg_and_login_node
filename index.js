require('dotenv').config();
const express = require('express');
const app = express();

const userRoute = require('./routes/user')


app.use(express.urlencoded({extended : false}));
app.use(express.json());

app.use('/users', userRoute);



const port =  5000
app.listen(port, ()=>{
    console.log(`The app is listening from port ${port}`)
})
