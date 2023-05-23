const Company = require('../models/company.model')

async function getAllCompanies(req, res) {
    const companies = await Company.findAll({
        where: req.query
    })
    if(companies)
    {
        return res.status(200).json(companies)
    }
}