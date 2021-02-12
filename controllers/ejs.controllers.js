const offre = require('../models/offre.model')
exports.pageAccueil = (req, res) => {
  res.render('index', { name: 'test' })
}

parseDate = (date) => {
  const words = date.split('-');
  const newDate = words[2].concat('/', words[1]).concat('/', words[0])
  return newDate
}
exports.searchOffres = async (req, res) => {
  console.log(req.body)
  const { date_d, date_r,air_d,air_a } = req.body
  try {
    const result = await offre.findAll({
    where: {
    date_depart: parseDate(date_d),
    date_retour: parseDate(date_r),
    aeroport_depart :air_d,
    aeroport_arriver:air_a
  }
  })
  result && res.render('offre',{offre:result})
  // res.status(200).json({result:result})
  // console.log(result)
  } catch (error) {
    res.render(`error server ${error}` )
  }
  // parseDate(date_d)
  // parseDate(date_r)
  // console.log(newDate)
  // res.render('offre')
}