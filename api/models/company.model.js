const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("mysql::memory");

const Company = sequelize.define('company', {
    cif: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING, 
        allowNull: false
    }, 
    email: {
        type: DataTypes.STRING, 
        allowNull: false, 
        validate:  {
            isEmail: true
        },
        unique: {
            args: true,
            msg: 'Email adress is already in use'
        }
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    province: {
        type: DataTypes.STRING,
        allowNull:false
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    },
    occupation: {
        type: DataTypes.STRING, 
        allowNull: false
    },
    url: {
        type: DataTypes.STRING, 
        allowNull: false
    }
    
})

(async () => {
    await sequelize.sync({force: true});
})();