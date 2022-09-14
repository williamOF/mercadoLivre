
// ************ Require's ************
const express = require('express');
const router = express.Router();
const path = require('path')

//  upload import
const upload = require('../index')

//middlewares.requires
const score = require('../middlewares/score')

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index); 

/*** CREATE ONE PRODUCT ***/ 
router.get('/create',productsController.create); 
router.post('/',upload.single('imageFile'),productsController.store); 


/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id',score ,productsController.detail); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', productsController.edit); 
router.put('/edit/:id', productsController.update); 


/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', productsController.destroy); 


module.exports = router;
