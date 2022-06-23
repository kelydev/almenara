'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class order_detail extends Model {
        static associate(models) {
            
            this.belongsTo(models.orders, {
                foreignKey: "order_id",
                targetKey: "id",
            });

            this.belongsTo(models.products, {
                foreignKey: "product_id",
                targetKey: "id",
            });

        }
    }
    order_detail.init(
    {
        product_id: DataTypes.INTEGER,
        order_id: DataTypes.INTEGER,
        quantity: DataTypes.INTEGER,
        price: DataTypes.DECIMAL,
    },
    {
        sequelize,
        modelName: 'order_detail',
        underscored: true,
        tableName: 'order_detail',
    });
     return order_detail;
};