'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class categories extends Model {
    static associate(models) {
      
      this.hasMany(models.categories, {
        foreignKey: "category_id",
      })

    }
  }
  categories.init({
    name: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'categories',
    underscored: true,
    tableName: 'categories',
  });
  return categories;
};