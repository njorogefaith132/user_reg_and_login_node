const express = require("express")
const router = express.Router()

const {create, getOne,deleteTask, updateTask} = require('../controllers/taskControllers')

router.post('/' , create)
router.get('/:task' , getOne)
router.put('/' , updateTask)
router.delete('/' , deleteTask)

module.exports = router