const { DataTypes } = require('sequelize');
const { db } = require('../database/config');

const Restaurant = db.define('restaurant', {
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
    address: {
        
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rating: {
        
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
})

module.exports = User