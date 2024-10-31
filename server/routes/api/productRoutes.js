const router = require('express').Router()

const { homeProductRoute } = require('../../controllers/testControllers.js')
const { categoryRoutes } = require('../../controllers/testControllers.js')

router.route('/').get(homeProductRoute)

module.exports = router