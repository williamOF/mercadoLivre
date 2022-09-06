const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {

	index: (req, res) => {
		
		res.render('index.ejs',{products})

	},
	search: (req, res) => {

		const id = req.params.id

		const produto = products.find(p=> p.id == id)

		res.reder('products.ejs',{products:produto})

	},
};

module.exports = controller;
