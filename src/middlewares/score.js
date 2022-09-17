const fs = require ('fs')
const path = require ('path');

const arquivo = path.join(__dirname, '../data/productsDataBase.json')
const products = JSON.parse(fs.readFileSync(arquivo, 'utf-8'));

//função para toSave arquivo json 2 parametros: 1° local do arquivo, 2° os dados para toSave
const toSave = require('../functions/saveProdutos')

const adicionarScore = (req, res ,next)=>{
    const id = req.params.id 

    const product = products.find(p=> p.id == id)

    console.log(product)

    if(product.score != undefined){
        product.score += 1
    }else{
        product.score = 1
    }

    const novoArrjson = products.filter(p=> p.id != id)
    novoArrjson.push(product)

    toSave(arquivo,novoArrjson)
    
    return next()
}
module.exports = adicionarScore
