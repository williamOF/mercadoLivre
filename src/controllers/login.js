const fs = require ('fs')
const path = require ('path');

const controller = {

    view:(req,res)=>{
        res.render('login')
    },

    usuario:(req,res)=>{
        res.redirect('/')
    }

}

module.exports = controller