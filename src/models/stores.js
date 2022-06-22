'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class stores extends Model {
        static associate(models) {

            this.belongsTo(models.store_sections, {
                foreignKey: "store_section_id",
                targetKey: "id",
            });

        }
    }
    stores.init(
    {
        store_section_id: DataTypes.INTEGER,
        name: DataTypes.STRING,
        address: DataTypes.STRING,
        phone: DataTypes.INTEGER,
        image: DataTypes.STRING,
        opening_hours: DataTypes.INTEGER,
    },
    {
        sequelize,
        modelName: 'stores',
        underscored: true,
        tableName: 'stores',
    });
     return stores;
};