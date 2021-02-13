const offre = require('../models/offre.model');

/* ! @Route  : GET => /
     Desc    : render to home page
     @Access : Pubic
*/
exports.pageAccueil = (req, res) => {
  res.render('index', { name: '' });
};

/* ! @Route  : GET => /offers
     Desc    : render all offers whide conditions
     @Access : Pubic
*/
exports.searchOffres = async (req, res) => {
  // console.log(req.body);
  const { date_d, date_r, air_d, air_a } = req.body;
  try {
    const result = await offre.findAll({
      where: {
        date_depart: parseDate(date_d),
        date_retour: parseDate(date_r),
        aeroport_depart: air_d,
        aeroport_arriver: air_a,
      },
    });
    if (result) {
      res.render('offre', { offre: result });
    }
  } catch (error) {
    res.render(`error server ${error}`);
  }
};
exports.dashboard = async (req, res) => {
  res.render('dashboard');
};
const parseDate = (date) => {
  const words = date.split('-');
  const newDate = words[2].concat('/', words[1]).concat('/', words[0]);
  return newDate;
};
