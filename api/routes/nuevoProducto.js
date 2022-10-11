// Import express
const express = require('express')

// Import home controller
const productController  = require('../controllers/nuevoProductList')

// Create express router
const router = express.Router()

router.get('/:id', productController.productGetAll);

// Export router
module.exports = router