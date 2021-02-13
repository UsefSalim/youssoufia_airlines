const express = require('express');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

const {
  pageAccueil,
  searchOffres,
  singleoffre,
  validation,
} = require('../controllers/ejs.controllers');

/* ! @Route  : GET => /
     Desc    : render to home page
     @Access : Pubic
*/
router.get('/', pageAccueil);

/* ! @Route  : GET => /offers
     Desc    : render all offers whide conditions
     @Access : Pubic
*/
router.post('/offers', searchOffres);

router.get('/offre/:id', singleoffre);

router.get('/validation', isAuth, validation);

module.exports = router;
