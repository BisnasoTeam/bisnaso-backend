const { Sequelize ,  DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql::memory');

const User = sequelize.define('user', {
   name: {
    type: DataTypes.STRING,
    allowNull: false
   },
   surname: {
    type: DataTypes.STRING,
    allowNull: false
   },
   username:{
    type: DataTypes.STRING,
    allowNull:false, 
    unique: true,
   },
   identity_card: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
   },
   email: {
    type: DataTypes.STRING,
    allowNull: false, 
    validate: {
        isEmail:true, 
    }, 
    unique: {
        args: true,
        msg: 'Email address is already in use'
    }
   }, 
   password: {
    type: DataTypes.STRING,
    allowNull: false
   }, 
   confirmation_password: {
    type: DataTypes.STRING,
    allowNull: false
   }
});

(async () => {
    await sequelize.sync({force: true});
})();