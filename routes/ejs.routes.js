const express = require('express');
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

const router = express.Router();
const { pageAccueil, searchOffres } = require('../controllers/ejs.controllers');

/* ! @Route  : GET => /
     Desc    : render to home page
     @Access : Pubic
*/
router.get('/', forwardAuthenticated, pageAccueil);

/* ! @Route  : GET => /offers
     Desc    : render all offers whide conditions
     @Access : Pubic
*/
router.post('/offers', searchOffres);

module.exports = router;
