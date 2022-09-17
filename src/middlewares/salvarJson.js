// exports functions
const fs = require ('fs')
const path = require ('path');

//function to save 
const salvar = (localParaSalvar,arquivoAserSalvo)=>{
    const njson = JSON.stringify(arquivoAserSalvo,null , 4)
    fs.writeFileSync(localParaSalvar,njson)
}

module.exports = salvar
