// const testRoute = (req, res) => {
//     try {
//         const category_name = req.params.category_name

//         if (!category_name) {
//             res.status(400).json({ error: 'Category name is required' })
//             return
//         }

//         res.status(200).json({ category_name })
//     } catch (error) {
//         console.log(error)
//         res.status(500).json(error)
//     }
// }

// module.exports = { testRoute }




const testRoute = async (req, res) => {
    try {
        const categoryName = req.query.category_name

        if (!categoryName) {
            res.status(400).json({ error: 'Category name is required' })
            return
        }

        res.status(200).json({ categoryName })
    } catch (error) {
        console.log(error)
        res.status(500).json({ errorMessage: error })
    }
}







module.exports = { testRoute }