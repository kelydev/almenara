'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class coupons extends Model {
        static associate(models) {

            this.hasOne(models.orders, {
                foreignKey: "coupon_id",
            });
        }
    }
    coupons.init(
    {
        name: DataTypes.STRING,
        code: DataTypes.STRING,
        amount: DataTypes.DECIMAL,
    }, 
    {
        sequelize,
        modelName: 'coupons',
        underscored: true,
        tableName: 'coupons',
    });
    return coupons;
};