const express = require('express');
const app = express()
const clientModel = require('./models').clientModel
const clientRoutes = require('./routes/client.routes.js')

// Test Create data 

// clientModel.create({
//   'nom': 'testNom',
//   'prenom': 'testPrenom',
//   'email': 'testemail@mail.com'
// })

// *** Routes *** //
// app.get('/',)

app.use('/client', clientRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => { console.log(`server connected on port : ${PORT}`) })