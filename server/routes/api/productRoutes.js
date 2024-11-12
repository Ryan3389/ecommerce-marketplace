const router = require('express').Router()

const { homeProductRoute } = require('../../controllers/testControllers.js')
const { categoryRoutes } = require('../../controllers/testControllers.js')
const { paymentRoute } = require('../../controllers/testControllers.js')
const { confirmRoute } = require('../../controllers/testControllers.js')

router.route('/').get(homeProductRoute)
router.route('/category_name').get(categoryRoutes)

router.route('/payment').post(paymentRoute)
router.route('/confirm').get(confirmRoute)


module.exports = router