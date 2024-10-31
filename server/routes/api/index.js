// const router = require('express').Router()
// const testRoutes = require('./testRoutes')

// router.use('/category_name', testRoutes)

// module.exports = router
const router = require('express').Router()
const testRoutes = require('./testRoutes')

// router.use('/test', testRoutes)
router.use('/category_name', testRoutes)

module.exports = router