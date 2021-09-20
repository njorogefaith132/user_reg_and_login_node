const express = require("express")
const router = express.Router()
const User = require('../classes/user')
const verifyToken = require('../middleware/auth');

// const {create, getOne, deleteUser, loginUser, updateUser}  = require('../controllers/usersControllers')
const {login, register, deleteUser}  = require('../contol/userController')

// router.post('/', create)
router.get('/login', (req, res) =>{
    login(req.body.username,
    req.body.password
    )
})
router.post('/register', (req, res) =>{
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
