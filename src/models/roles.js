'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class roles extends Model {
    
    static associate(models) {
      this.hasMany(models.users, {
        foreignKey: "role_id",
      });
    }
  }
  roles.init(
    {
      name: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'roles',
      underscored: true,
      tableName: 'roles',
    }
  );
  return roles;
};