const express = require('express')
const router = express.Router()
const {pageAccueil,searchOffres} = require('../controllers/ejs.controllers')

router.get('/',pageAccueil)

router.post('/offers',searchOffres)


module.exports = router 