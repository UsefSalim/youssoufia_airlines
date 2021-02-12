const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const ejsRoutes = require('./routes/ejs.routes')
// const aeroport = require('./models/aeroport')
// const offre = require('./models/offre.model')
// const axios = require('axios')
const fs = require('fs')
require('./config/db')

// *** MIDDLEWARES *** //
// ejs
app.use(express.static('public'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/css', express.static(__dirname + 'public/css'))
app.set('view engine', 'ejs')
//body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

// *** TESTS *** //


// insert the data in airoport model
// app.use('/data', async (req, res) => {
//   fs.readFile('./x.json', 'utf-8', (err, data) => {
//   if (!err) parsedata = JSON.parse(data)
//   parsedata.map((d) => {
//         const air = new aeroport({ name: d.name });
//         air.save()
//       })
// })

// })

// function randomDate(date1, date2) {
//   function randomValueBetween(min, max) {
//     return Math.random() * (max - min) + min;
//   }
//   var date1 = date1 || '01-01-1970'
//   var date2 = date2 || new Date().toLocaleDateString()
//   date1 = new Date(date1).getTime()
//   date2 = new Date(date2).getTime()
//   if (date1 > date2) {
//     return new Date(randomValueBetween(date2, date1)).toLocaleDateString()
//   } else {
//     return new Date(randomValueBetween(date1, date2)).toLocaleDateString()

//   }
// }
// console.log(randomDate('02/13/2021', '04/18/2021'))


// function getRandomInt(max) {
//   return Math.floor(Math.random() * Math.floor(max));
// }

// app.use('/offre', async (req, res) => {
//   try {
//     allair = await aeroport.findAll()
//     for (let i = 0; i <= 500; i++) {
//       const newoffre = new offre({
//         prix: Math.floor(Math.random() * 10000) + 1000,
//         aeroport_depart: allair[getRandomInt(allair.length)].name,
//         aeroport_arriver: allair[getRandomInt(allair.length)].name,
//         date_depart: randomDate('02/12/2021', '02/14/2021'),
//         date_retour: randomDate('02/14/2021', '02/17/2021'),
//       })
//       newoffre.save()
//     }
//   } catch (error) {
//     console.log(error)
//   }
// })

// ! *** Routes *** ! // 

app.use('/',ejsRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => { console.log(`server connected on port : ${PORT}`) })