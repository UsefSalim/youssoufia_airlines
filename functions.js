// app.use('/data', async (req, res) => {
//   fs.readFile('./x.json', 'utf-8', (err, data) => {
//     if (!err) parsedata = JSON.parse(data);
//     parsedata.map((d) => {
//       const air = new aeroport({ name: d.name });
//       air.save();
//     });
//   });
// });
// function randomDate(date1, date2) {
//   function randomValueBetween(min, max) {
//     return Math.random() * (max - min) + min;
//   }
//   var date1 = date1 || '01-01-1970';
//   var date2 = date2 || new Date().toLocaleDateString();
//   date1 = new Date(date1).getTime();
//   date2 = new Date(date2).getTime();
//   if (date1 > date2) {
//     return new Date(randomValueBetween(date2, date1)).toLocaleDateString();
//   }
//   return new Date(randomValueBetween(date1, date2)).toLocaleDateString();
// }
// console.log(randomDate('02/13/2021', '04/18/2021'));

// function getRandomInt(max) {
//   return Math.floor(Math.random() * Math.floor(max));
// }
// const airlines = [
//   'Emirates',
//   'Cathay Pacific Airways',
//   'ANA All Nippon Airways',
//   'Singapore Airlines',
//   'Qatar Airways',
// ];
// app.use('/generateoffre', async (req, res) => {
//   try {
//     const allair = await aeroport.findAll();
//     for (let i = 0; i <= 1200; i++) {
//       const newoffre = new Offre({
//         prix: Math.floor(Math.random() * 10000) + 1000,
//         aeroport_depart: allair[getRandomInt(allair.length)].name,
//         aeroport_arriver: allair[getRandomInt(allair.length)].name,
//         date_depart: randomDate('02/15/2021', '02/15/2021'),
//         date_retour: randomDate('02/16/2021', '02/18/2021'),
//         place: 20,
//         airline: airlines[getRandomInt(airlines.length)],
//       });
//       newoffre.save();
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });
