const express = require('express')
const router = express.Router()
const { getAllClient } = require('../controllers/client.controller')

router.get('/', getAllClient)



module.exports = router