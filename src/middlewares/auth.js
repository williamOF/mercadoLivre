const auth = (req,res,next)=>{
    const login = req.session.usuario
    if(typeof(login)!= "undefined"){
        return next()
    }else{
        return res.send('você precisa estar logado para ter acesso')
    }
}

module.exports = auth