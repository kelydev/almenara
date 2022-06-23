'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class products extends Model {
    
        static associate(models) {

            this.belongsTo(models.categories, {
                foreignKey: "category_id",
                targetKey: "id",
            });
            
            this.hasMany(models.shopping_cart, {
                foreignKey: "product_id",
            });

            this.hasMany(models.order_detail, {
                foreignKey: "product_id",
            });

        }
    }
    products.init(
    {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        price: DataTypes.DECIMAL,
        image: DataTypes.STRING,
        stock: DataTypes.INTEGER,
        stock_reserve: DataTypes.INTEGER,
        status: DataTypes.BOOLEAN,
        category_id: DataTypes.INTEGER,
    },
    {
        sequelize,
        modelName: 'products',
        underscored: true,
        tableName: 'products',
    }
    );
    return products;
};