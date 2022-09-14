const express = require('express')
const router = express.Router()

const cadastro = require('../controllers/cadastro')

router.get('/', cadastro.view)
router.post('/', cadastro.usuario)

module.exports = router