const fs = require ('fs')
const path = require ('path');
const toSave = require('../functions/saveProdutos');

// ************ bcrypt - (don't touch) ************
const bcrypt = require('bcrypt')

const arquivo = path.join(__dirname, '../data/usuarios.json')
const usuarios = JSON.parse(fs.readFileSync(arquivo, 'utf-8'));

const controller = {
    view: (req,res)=>{
        res.render('cadastro')
    },
    usuario:(req,res)=>{
        const {name,email,password,phone} = req.body
        const cPassword = bcrypt.hashSync(password, 10)
        const novoUser = {
            name,
            password: cPassword,
            email,
            phone,
        }
        usuarios.push(novoUser)
        toSave(arquivo,usuarios)
        
        res.redirect('/')
    }
}

module.exports = controller