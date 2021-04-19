const express = require('express')
const router = express.Router()

const photos = require('../models/dataphotos')

const photosController = require('../controllers/photos-controller')



router.get('/', photosController.getAllimages)



module.exports = router



/*
const express = require('express')
const router = express.Router()
const cats = require('../models/cats')
const catsController = require('../controllers/cats')
router.get('/', catsController.getAllCats)
router.get('/filter', catsController.getFilteredCats)
router.get('/add-cat', catsController.getAddCat)
router.post('/add-cat', catsController.postAddCat)
module.exports = router

*/