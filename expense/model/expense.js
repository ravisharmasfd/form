const Sequelize = require('sequelize');
const sequelize = require('../utls/database');

const Expense = sequelize.define('expense', {
  amount: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false
  },
  time: {
    type: Sequelize.DATE,
    allowNull: false
  }
});

module.exports = Expense;
