const express = require('express')

// Importa middleware
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const compression = require('compression')
const helmet = require('helmet')
const cors = require('cors')

// Importa mis routes
const homeRouter = require('./routes/nuevoHome')
const searchRouter = require('./routes/searchHome')
const productRouter = require('./routes/nuevoProducto')

// Inicia default port
const PORT = process.env.PORT || 5000

// Crea express app
const app = express()

// Implementa middleware
app.use(cors())
app.use(helmet())
app.use(compression())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(bodyParser.json())

// Implementa route para '/items' endpoints
app.use('/api/search/', searchRouter)
app.use('/api/items/', productRouter)
app.use('/', homeRouter)

// Implementa route para errores
app.use((err, req, res, next) => {
   console.error(err.stack)

   res.status(500).send('Something broke!')
})

// Inicia express app
app.listen(PORT, function() {
  console.log(`Server is running on: ${PORT}`)
})

