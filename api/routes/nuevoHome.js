// Import express
// Usa especico controller de una especifica endpoint api
// primero pasa por la ruta y luego va al controlador que luego handle de responsse

// We will then use this router, and get method, to will handle GET request coming to / endpoint.

// Import express
const express = require('express')

// Import home controller
const homeControllers = require('../controllers/nuevoHome')

// Create express router
const router = express.Router()

// Create rout between homeControllers and '/' endpoint
router.get('/', homeControllers.homeGet)

// Export router
module.exports = router