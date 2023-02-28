const { DataTypes } = require('sequelize');
const { db } = require('../database/config');

const Order = db.define('order', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER
    },
    mealld: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userId: {
        
    },
    totalPrice: {
      
    },
    quantity: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'normal',
        enum: ['normal', 'admin']
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
})

module.exports = Order