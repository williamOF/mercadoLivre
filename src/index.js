//requires

const multer = require('multer')
const path  = require('path')

// aplicando funçoes no objeto multerStorage
const multerDiskStorage = multer.diskStorage({
	destination:(req, file, callback)=>{
		const arquivo = path.join(__dirname,'../public/images/products/')
		callback(null,arquivo)
	},
	filename:(req, file, callback)=>{
		const imageName = Date.now() + file.originalname
		callback(null, imageName)
	}
}) 

const upload = multer({storage:multerDiskStorage})

// exportando o upload

module.exports =  upload