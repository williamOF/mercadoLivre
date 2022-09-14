const fs = require ('fs')
const path = require ('path');

const arquivo = path.join(__dirname, '../data/productsDataBase.json')
const products = JSON.parse(fs.readFileSync(arquivo, 'utf-8'));

const salvar = (products)=>{
    const njson = JSON.stringify(products,null , 4)
    fs.writeFileSync(arquivo,njson)
}

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
    salvar(novoArrjson)
    return next()
}
module.exports = adicionarScore
