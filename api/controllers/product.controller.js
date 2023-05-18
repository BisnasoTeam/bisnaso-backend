const Product = require('../models/product.model')

async function getAllProducts(req,res) {
    try {
        const products = await Product.findAll({
            where: req.query
        })
        if(products)
        {
            return res.status(200).json(products)
        } else {
            return res.status(404).send('Products not found')
        }
    } catch (error) {
        res.status(500).send(error.message)   
    }
}

async function getOneProduct(req, res){
    try {
        const product = await Product.findByPk(req.params.id)
        if(product)
        {
            return res.status(200).json(product)
        }else{
            return res.send(404).send(error.message)
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function createOneProduct(req, res){
    try {
        const product = await Product.create(req.body)
        return res.status(200).json({message: 'Product created'})
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function updateOneProduct(req, res){
    try {
        const updated = await Product.update(req.body, {
            where: {
                id: req.params.id,
            }
        })
        console.log(updated)
        if(updated)
        {
            return res.status(200).json({message: 'Product updated'})
        } else {
            return res.status(404).send('Product not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteProduct(req, res) {

}

module.exports = {
    getAllProducts,
    getOneProduct,
    createOneProduct,
    updateOneProduct, 
    deleteProduct
}