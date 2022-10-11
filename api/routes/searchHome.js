// Import express
const express = require('express')

// Import home controller
const searchController  = require('../controllers/nuevoSearch')

// Create express router
const router = express.Router()

// Create route between homeControllers and '/' endpoint
router.get('/', searchController.searchGetAll, function(){
});

// Export router
module.exports = router