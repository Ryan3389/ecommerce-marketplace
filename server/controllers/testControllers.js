require('dotenv').config()
const stripe = require('stripe')(process.env.STRIPE_KEY);
require('dotenv').config()
const { Pool } = require('pg')

const pool = new Pool(
    {

        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        host: 'localhost',
        database: process.env.POSTGRES_DB
    },
    console.log(`You are now connected to the database.`)
)

pool.connect();

const homeProductRoute = async (req, res) => {
    try {
        const sql = `
        SELECT 
            category.category_name,
            products.product_id,
            products.product_name,
            products.product_desc,
            products.product_price,
            products.product_img,
            products.cat_id
        FROM 
            category
        LEFT JOIN 
            products 
        ON 
            products.cat_id = category.category_id
        `

        pool.query(sql, (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message })
                return
            }
            res.json({
                message: 'success',
                data: result.rows
            })
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ errorMessage: error })
    }
}


const categoryRoutes = (req, res) => {
    try {
        const categoryName = req.query.category_name

        if (!categoryName) {
            res.status(400).json({ error: 'Category name is required' })
            return
        }

        const sql = `
        SELECT
            category.category_name,
            products.product_id,
            products.product_name,
            products.product_desc,
            products.product_price,
            products.product_img,
            products.cat_id
        FROM
            category
        LEFT JOIN
            products
        ON
            products.cat_id = category.category_id
        WHERE 
            category.category_name = $1
`

        pool.query(sql, [categoryName], (err, result) => {
            if (err) {
                res.status(500).json({ error: err.message })
                return
            }
            res.json({
                message: 'Success',
                data: result.rows
            })
        })
    } catch (error) {
        console.log(error)
        res.status(200).json({ errorMessage: error })
    }
}

const paymentRoute = async (req, res) => {
    // console.log(req.body.price)
    const { price } = req.body
    const priceInCents = price * 100

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: priceInCents, // specify amount in cents
            currency: 'usd',
        });
        console.log('Payment successful')
        res.json({ clientSecret: paymentIntent.client_secret, totalPrice: paymentIntent.amount }); // Ensure JSON response
    } catch (error) {
        console.error(error);
        console.log('Payment denied')
        res.status(500).json({ message: 'Server error' }); // Return an error response if needed
    }
}
const confirmRoute = (req, res) => {
    const paymentIntentId = req.query.payment_intent;
    const clientSecret = req.query.payment_intent_client_secret;
    const status = req.query.redirect_status;

    // Implement logic based on the payment status
    if (status === 'succeeded') {
        // Handle successful payment here
        res.status(200).json({ message: 'Payment successful' })
        // res.send("Payment succeeded!");
    } else {
        // Handle other cases or errors
        res.status(400).json({ message: 'Payment failed' })
        // res.send("Payment failed or was cancelled.");
    }
}

module.exports = { homeProductRoute, categoryRoutes, paymentRoute, confirmRoute }


