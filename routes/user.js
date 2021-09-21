const express = require("express")
const router = express.Router()
const User = require('../classes/user')
// const verifyToken = require('../middleware/auth');
const bcrypt = require('bcrypt');
// const gentoken = require('../helpers/generateToken');
const Joi = require('joi');

const {login, register, deleteUser}  = require('../contol/userController')

router.get('/login', (req, res) =>{
    const schema = Joi.object().keys({
        username: Joi.string().min(6).required(),
        password: Joi.string().min(8).required()
    })
    const {error} = schema.validate(req.body)
    if(error){
        return res.status(400).send({message: error.details[0].message});
    }


    login(req.body.username,
    req.body.password
    )
})

router.post('/register', (req, res) =>{
    const schema = Joi.object().keys({
        username: Joi.string().min(6).required(),
        password: Joi.string().min(8).required(),
        project : Joi.string().min(5).required()
    })

    const {error} = schema.validate(req.body)
    if(error){
        return res.status(400).send({message: error.details[0].message});
    }
    register(
        req.body.username,
        req.body.password,
        req.body.project,
    )
    
    
})

router.delete('/', (req, res)=>{
    deleteUser( req.body.username)
})  

// router.put('/', updateUser)

module.exports = router;
