'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class shopping_cart extends Model {
    
        static associate(models) { 
        }
    }

    shopping_cart.init(
        {
            user_id: DataTypes.INTEGER,
            product_id: DataTypes.INTEGER,
            quantity: DataTypes.INTEGER,
            price: DataTypes.DECIMAL,
        },
        {
            sequelize,
            modelName: 'shopping_cart',
            underscored: true,
            tableName: 'shopping_cart',
        }
    );
    return shopping_cart;
};