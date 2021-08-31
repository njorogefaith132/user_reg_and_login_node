const express = require("express")
const router = express.Router()

const {create, getOne,deleteTask, updateTask} = require('../controllers/taskControllers')

router.post('/' , verifyToken ,create)
router.get('/:task' ,verifyToken, getOne)
router.put('/' ,verifyToken,  updateTask)
router.delete('/' ,verifyToken, deleteTask)

module.exports = router