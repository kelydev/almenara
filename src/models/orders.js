'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class orders extends Model {
        static associate(models) {
            
            this.belongsTo(models.users, {
                foreignKey: "user_id",
                targetKey: "id",
            });

            this.belongsTo(models.coupons, {
                foreignKey: "coupon_id",
                targetKey: "id",
            });

            this.belongsTo(models.stores, {
                foreignKey: "store_id",
                targetKey: "id",
            });

            this.hasMany(models.order_detail, {
                foreignKey: "order_id",
            });

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