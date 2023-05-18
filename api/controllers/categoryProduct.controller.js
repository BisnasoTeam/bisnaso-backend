const CategoryProduct = require('../models/categoryProduct.model')

async function getAllCategoriesProducts(req, res){
    try {
        const categoriesProduct = await CategoryProduct.findAll({
            where: req.query
        })
        if(categoriesProduct)
        {
            return res.status(200).json(categoriesProduct)
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = { 
    getAllCategoriesProducts,
}