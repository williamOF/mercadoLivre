const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {

	index: (req, res) => {
		
		res.render('index.ejs',{products,toThousand})

	},
	search: (req, res) => {

		let element = req.query.keywords;
		let searchResult = products.filter(product => product.name.toLowerCase().includes(element));	
		
		res.render('results', {products:searchResult, element , toThousand})

	},
};

module.exports = controller;
