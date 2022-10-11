// const express = require('express'); // referencia de modulo
// const morgan = require('morgan'); // referencia de modulo
// const app = express();  // nombre de mi servidor


// // Settings

// // Middlewares
// app.use(express.json()); // le dice a express que  reciba de parte del cliente un json
// app.use(morgan('dev'));


// // le dice a express que  debe pasar antes por esta ruta para continuar  req(peticion del servidor)
// app.all('/product', (req, res, next) => {
//     console.log('paso por aqui');
//     next();
// })

// // req status
// // res el tipo de contenido

// // enrutamiento - por defacul son peticiones get
// app.get('/otra', (req, res) => {
//     res.json({
//         username: 'objeto',
//         lastname: 'Howe'
//     })
// });

// app.get('/product', (req, res) => {
//     res.send('')
// });

// app.post('/contact/:id', (req, res) => {
//     console.log(req.body);  //recibe lo que envio el cliente (cuerpo de la peticion)
//     console.log(req.params);  //recibe lo que envio el cliente (params de la peticion)
//     res.send('About me -post');
// });

// app.put('/about', (req, res) => {
//     res.send('About me - put/actualiza');
// });

// app.put('/product/:id', (req, res) => {
//     console.log(req.body); //necesita el body para encontrar la actualizacion
//     res.send('Porducto actualizado');
// });

// app.delete('/test', (req, res) => {
//     res.send('About me - elimina');
// });


// app.delete('/product/:id', (req, res) => {
//     res.send(`Porducto ${req.params} eliminado`);
// });



// app.use(express.static('public'));


// app.listen(9000, () =>{
//     console.log("hola maldita sea. serve on port 9000")
// } );

