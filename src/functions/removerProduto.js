const fs = require ('fs')
const path = require ('path')
const toSave = require('./saveProdutos')

const arquivo = path.join(__dirname, "../data/productsDataBase.json")
const products = JSON.parse( fs.readFileSync( arquivo, 'utf-8'))

const deletarProduto = (id) => {
    const produto = products.find(p=> p.id == id)
    
    if(produto != undefined){
        
        const produtoRemoved = products.filter(p=> p.id != id)

        //toSave 2 parâmetros 1° local arquivo, 2° o arquivo , salve isto !!
        toSave(arquivo,produtoRemoved)
        
    }else{
        return "error"
    }
}

module.exports = deletarProduto