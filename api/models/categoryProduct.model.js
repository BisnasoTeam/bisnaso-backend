const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize('mysql::memory')

const CategoryProduct = sequelize.define('categoryProduct', {
 name: {
    type: DataTypes.STRING,
    allowNull: false
 }
})

(async () => {
    await sequelize.sync({force: true});
})();