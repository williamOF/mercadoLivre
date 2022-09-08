const fs = require('fs');
const path = require('path');
const upload = require('..');
const middlewaresProd = require ('../middlewares/criateProduct')


const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		res.render('products.ejs',{products,toThousand})
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		const id = req.params.id
		const product = products.find(p=> p.id == id)

		res.render('detail',{product,toThousand})
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('product-create-form')
	},
	
	// Create -  Method to store
	store: (req, res) => {
		const body = req.body
		const imgname = req.file.filename

		middlewaresProd.criate(body,imgname)
		
		res.redirect('/products/')
	},

	// Update - Form to edit
	edit: (req, res) => {
		const id = req.params.id

		const product = products.find(p=> p.id ==id)

		res.render('product-edit-form.ejs',{product,toThousand})
	},
	// Update - Method to update
	update: (req, res) => {
		const body = req.body
		const id = req.params.id

		middlewaresProd.edit(body,id)

		res.redirect('/products/')
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		const id = req.params.id

		middlewaresProd.delete(id)

		res.redirect('/')
	}
};

module.exports = controller;