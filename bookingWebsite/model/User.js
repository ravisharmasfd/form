const sequelize = require('../utls/database')
const User = sequelize.define('booking', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    phone: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });
  module.exports = User;