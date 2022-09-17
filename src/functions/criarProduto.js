const fs = require('fs')
const path = require('path')
const toSave = require('./saveProdutos')

//caminho do json contendo todos os produtos da pagina
const arquivo = path.join(__dirname,'../data/productsDataBase.json')
const products = JSON.parse(fs.readFileSync(arquivo, 'utf-8'))

// função para salvar dados do formulário criar produto
const criate = (objeto,imgName)=>{

        objeto.id = products.length+1
        objeto.image = imgName
        products.push(objeto)
        //toSave 2 parâmetros 1° local arquivo, 2° o arquivo , salve isto !!
        toSave(arquivo,products)
}

module.exports = criate