const express = require("express")
const router = express.Router()
const verifyToken = require('../middleware/auth');

const {create, getOne, deleteProject, updateProject}  = require('../controllers/projectControllers')

router.post('/', create)
router.get('/:project_name', getOne)
router.delete('/', deleteProject)
router.put('/', updateProject)

module.exports = router;
