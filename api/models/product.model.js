const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize('mysql::memory')

const Product = sequelize.define('product', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    code: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT, 
        allowNull: false
    }, 
    photo: { 
        type: DataTypes.STRING, 
        allowNull: false
    }
});

(async () => {
    await sequelize.sync({force: true});
})();