
const controller = {
    view: (req,res)=>{
        res.render('cadastro')
    },
    usuario:(req,res)=>{
        res.redirect('/')
    }
}

module.exports = controller