const fs = require ('fs')
const path = require ('path');
const { update } = require('../controllers/productsController');
const HoraDia = new Date()

const arquivo = path.join(__dirname, '../data/productsDataBase.json')
const products = JSON.parse(fs.readFileSync(arquivo, 'utf-8'));

const salvar = (products)=>{
    const njson = JSON.stringify(products,null , 4)
    fs.writeFileSync(arquivo,njson)
}

const seNaoVazioSubistitua = (original,modificacao)=>{
    if(modificacao.length ==0){
        return original
    }else{
        return modificacao
    }
}

module.exports = {
    criate:(objeto,imgName)=>{
       let id = products.length+1
       objeto.id = id
       objeto.image = imgName
       products.push(objeto)
       salvar(products)
    },
    delete:(id)=>{
        const buscar = products.find(p=> p.id == id)
        

        const novoArr = products.filter(p=>p.id !=id)
        salvar(novoArr)
    },
    edit:(body,id)=>{
        
        // procurando os dados originais do produto no banco de dados
        const product = products.find(p=> p.id == id)

        // teste, se houver modificação os dados serão implementados se não continua o original
        // função se nao fazio é um callback de verificação de string 
        let ProdutoModificado = {
            id: product.id,
            name : seNaoVazioSubistitua(product.name,body.name),
            price : seNaoVazioSubistitua(product.price,body.price),
            discount : seNaoVazioSubistitua(product.discount,body.discount),
            category : seNaoVazioSubistitua(product.category,body.category),
            description : seNaoVazioSubistitua(product.description,body.description),
            image: product.image
        }

        // função para filtrar do banco de data o produto correspondente e retornando um novo sem ele
        const dataSemProdutoCorrespondente = products.filter(p=> p.id != id)

        // adicionando ao banco de dados o produto removido acima com as atualizações
        dataSemProdutoCorrespondente.push(ProdutoModificado)

        //função callback para salvar os dados
        salvar(dataSemProdutoCorrespondente)
    }
}