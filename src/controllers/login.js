const fs = require ('fs')
const path = require ('path');
const salvar = require('../middlewares/salvarJson');
const bcrypt = require('bcrypt');
const { nextTick } = require('process');

const arquivo = path.join(__dirname, '../data/usuarios.json')
const usuarios = JSON.parse(fs.readFileSync(arquivo, 'utf-8'));

const controller = {
    view:(req,res)=>{
        res.render('login')
    },
    usuario:(req,res)=>{
        res.redirect('/')
    }
}

module.exports = controller