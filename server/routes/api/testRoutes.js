// const router = require('express').Router()

// const { testRoute } = require('../../controllers/testControllers')

// router.route('/').get(testRoute)

// module.exports = router

const router = require('express').Router()

// const { testRoute } = require('../../controllers/testControllers.js')
const { testRoute } = require('../../controllers/testControllers.js')

// router.route('/').post(testRoute)
router.route('/').get(testRoute)

module.exports = router