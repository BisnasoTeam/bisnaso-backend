const Promotion = require('../models/promotion.model')

async function getAllPromotions(req, res) {
    try {
        const promotions = await Promotion.findAll({
            where: req.query
        })
        if(promotions)
        {
            return res.status(200).json(promotions)
        }else {
            return res.status(404).send('Promotions not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function getOnePromotion(req, res){
    const promotion = await Promotion.findByPk(req.params.id)
    return res.status(200)
}

module.exports = {

getAllPromotions,

xcc
}