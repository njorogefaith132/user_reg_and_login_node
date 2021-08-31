const express = require("express")
const router = express.Router()
const verifyToken = require('../middleware/auth');

const {create, getOne, deleteProject, updateProject}  = require('../controllers/projectControllers')

router.post('/', verifyToken, create)
router.get('/:project_name', verifyToken, getOne)
router.delete('/', verifyToken, deleteProject)
router.put('/', verifyToken, updateProject)

module.exports = router;
