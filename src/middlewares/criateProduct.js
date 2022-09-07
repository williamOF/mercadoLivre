const fs = require ('fs')
const path = require ('path')

const arquivo = path.join(__dirname, '../data/productsDataBase.json')
const products = JSON.parse(fs.readFileSync(arquivo, 'utf-8'));

module.exports = {
    criate:(objeto)=>{
        
    }
}