const router = require('express').Router()
const productRoutes = require('./productRoutes')

// router.use('/category_name', testRoutes)
router.use('/products', productRoutes)
router.use('/create-payment-intent', productRoutes)

module.exports = router