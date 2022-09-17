const fs = require ('fs')
const path = require ('path');

//toSave 2 parâmetros 1° local arquivo, 2° o arquivo , salve isto !!

const salvar = ( localParaSalvar, arquivoAserSalvo )=>{
    const njson = JSON.stringify( arquivoAserSalvo, null , 4)
    fs.writeFileSync( localParaSalvar, njson)
}

module.exports = salvar