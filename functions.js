// const aeroport = require('./models/aeroport')
// const offre = require('./models/offre.model')
// const axios = require('axios')
// const fs = require('fs')
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

/// //// test register methode failed

// const ifMail = await Client.findOne({ where: { email: req.body.email } });
// if (ifMail) {
//   res.render('register', {
//     err: 'adress mail deja existante veiller vous connecter',
//   });
// }
// const { error } = RegisterValidations(req.body);
// error && res.render('register', { err: error });
// const registerClient = new Client({
//   ...req.body,
// });
// const salt = await bcrypt.genSalt(10);
// const hashdPassword = await bcrypt.hash(req.body.password, salt);
// registerClient.password = hashdPassword;
// try {
//   if (!ifMail && !error) {
//     const addClient = await registerClient.save();
//     addClient && res.render('index', { name: req.body.name });
//   }
// } catch (err) {
//   res.render('404');
// }
