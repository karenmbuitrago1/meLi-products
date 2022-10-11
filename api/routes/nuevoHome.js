// Import express
const express = require('express')

// Import home controller
const homeControllers = require('../controllers/nuevoHome')

// Create express router
const router = express.Router()

router.get('/', homeControllers.homeGet)

// Export router
module.exports = router