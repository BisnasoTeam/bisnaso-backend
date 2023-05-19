const { Sequelize } = require ('sequelize')
const sequelize = new Sequelize('mysql::memory')

const Promotion = sequelize.define('promotion', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type:DataTypes.STRING,
        allowNull: false,
    },
    discount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
})

(async () => {
    await sequelize.sync({force: true});
})();