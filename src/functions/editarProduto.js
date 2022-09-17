const fs = require ('fs')
const path  = require ('path')
const toSave = require('./saveProdutos')

const arquivo = path.join(__dirname, '../data/productsDataBase.json')
const products = JSON.parse(fs.readFileSync(arquivo, 'utf-8'))

const editarProduto = (body,id) => {

    const produto = products.find(p => p.id == id)
    if(produto != undefined){

        const {id,name,price,discount,category,description,image} = body

        const produtoEditado = {
            id:id,
            name: verificar(produto.name,name),
            price: verificar(produto.price,price),
            discount: verificar(produto.discount,discount),
            category: verificar(produto.category,category),
            description: verificar(produto.description,description),
            image: verificar(produto.image,image),
        }

        const produtos = products.filter(p => p.id != id)
        produtos.push(produtoEditado)
        
        //toSave 2 parâmetros 1° local arquivo, 2° o arquivo , salve isto !!
        toSave(arquivo,produtos)

    }else{
        return 'error'
    }
}

const verificar = (valAnterior,ValAtual) => {

    //verificar se os campos digitados na edição estão vazios ou n 
    if(ValAtual.length  == 0){
        return valAnterior
    }else{
        return ValAtual
    }

}

module.exports = editarProduto