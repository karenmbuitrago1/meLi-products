// Import express
const express = require('express')

// Import home controller
const searchController  = require('../controllers/nuevoSearch')

// Create express router
const router = express.Router()

router.get('/', searchController.searchGetAll, function(){
});

// Export router
module.exports = router