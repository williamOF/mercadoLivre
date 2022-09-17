const express = require('express')
const router = express.Router()


const checkFields = require('../middlewares/checkFields')
const login = require('../controllers/login')

router.get('/', login.view)
router.post('/', checkFields ,login.usuario)

module.exports = router