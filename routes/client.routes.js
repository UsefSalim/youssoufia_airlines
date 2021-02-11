const express = require('express')
const router = express.Router()
const { addClient, getAllClient } = require('../controllers/client.controller')

router.get('/', getAllClient)
router.post('/addclient', addClient)



module.exports = router