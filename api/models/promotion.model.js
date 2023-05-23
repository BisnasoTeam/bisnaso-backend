const { Sequelize } = require ('sequelize')
const sequelize = new Sequelize('mysql::memory')

const Promotion = sequelize.define("promotion", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  code: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  photo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  begin_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  finish_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  discount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  
})(async () => {
  await sequelize.sync({ force: true });
})();