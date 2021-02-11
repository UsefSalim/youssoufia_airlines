const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const clientRoutes = require('./routes/client.routes.js')


// *** Middleware ***//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// *** Routes *** //

app.use('/client', clientRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => { console.log(`server connected on port : ${PORT}`) })