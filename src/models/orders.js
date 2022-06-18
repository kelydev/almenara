'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class orders extends Model {
        static associate(models) {
            //RELATIONS
        }
    }
    orders.init(
    {
        user_id: DataTypes.INTEGER,
        store_id: DataTypes.INTEGER,
        coupon_id: DataTypes.INTEGER,
        date_creation: DataTypes.DATE,
        date_delivery: DataTypes.DATE,
        subtotal_price: DataTypes.DECIMAL,
        total_price: DataTypes.DECIMAL,
        amount_igv: DataTypes.DECIMAL,
        payment: DataTypes.STRING,
        operation_code: DataTypes.STRING,
        status: DataTypes.BOOLEAN,
    },
    {
        sequelize,
        modelName: 'orders',
        underscored: true,
        tableName: 'orders',
    });
     return orders;
};