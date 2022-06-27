'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class store_sections extends Model {
        static associate(models) {
            this.hasMany(models.stores, {
                foreignKey: "store_section_id",
            })
        }
    }
    store_sections.init(
    {
        name: DataTypes.STRING,
        status: DataTypes.BOOLEAN,
    }, 
    {
        sequelize,
        modelName: 'store_sections',
        underscored: true,
        tableName: 'store_sections',
    });
     return store_sections;
};