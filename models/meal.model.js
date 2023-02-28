const { DataTypes } = require('sequelize');
const { db } = require('../database/config');

const Meal = db.define('meal', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    restautantId: {
      
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
})

module.exports = Meal