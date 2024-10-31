// const testRoute = async (req, res) => {
//     try {
//         const categoryName = req.query.category_name

//         if (!categoryName) {
//             res.status(400).json({ error: 'Category name is required' })
//             return
//         }

//         res.status(200).json({ categoryName })
//     } catch (error) {
//         console.log(error)
//         res.status(500).json({ errorMessage: error })
//     }
// }
require('dotenv').config()
const { Pool } = require('pg')

const pool = new Pool(
    {

        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        host: 'localhost',
        database: process.env.POSTGRES_DB
    },
    console.log(`You are not connected to the database.`)
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





module.exports = { homeProductRoute }