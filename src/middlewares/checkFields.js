const fs = require ('fs')
const path = require ('path')
const bcrypt = require('bcrypt')

const arquivo = path.join(__dirname, '../data/usuarios.json')
const usuarios = JSON.parse(fs.readFileSync(arquivo, 'utf-8'));

const checkFields = (req,res,next)=>{
        //obtendo os dados digitados na view login 
        const {email,password} = req.body

        //pesquisando se o email digitado pelo user existe no bd
        const usuario = usuarios.find(p=> p.email == email)

        if(usuario == undefined){
                res.send('email nao cadastrado')
        }
        
        //comparando a senha digitada pelo user com a do bd 
        const comparePass = bcrypt.compareSync(password, usuario.password)
        if(!comparePass){
                res.send('senha invalida')
        }

        //definindo a session usuario
        req.session.usuario = usuario
        
        return next()
}

module.exports = checkFields