const { DataTypes } = require('sequelize');
const { db } = require('../database/config');

const Review = db.define('review', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER
    },
    userId: {
       
    },
    comment: {
        
    },
    restaurantId: {
       
    },
    rating: {
        
    },
    
})

module.exports = User