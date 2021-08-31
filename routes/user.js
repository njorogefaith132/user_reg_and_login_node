const express = require("express")
const router = express.Router()
const verifyToken = require('../middleware/auth');

const {create, getOne, deleteUser, loginUser, updateUser}  = require('../controllers/usersControllers')

router.post('/', create)
router.get('/:username', getOne)
router.delete('/', deleteUser)
router.post('/login', loginUser)
router.put('/', updateUser)

module.exports = router;
