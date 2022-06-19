'use strict';
import { hashSync, genSaltSync, compareSync } from "bcrypt";

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    
    static associate(models) {

      this.belongsTo(models.roles, {
        foreignKey: "role_id",
        targetKey: "id",
      });

      this.belongsToMany(models.products, {
        through: 'shopping_cart',
        foreignKey: 'user_id',
        targetKey: "id",
        otherKey: 'product_id',
        targetKey: "id"
      });

    }

    async hashPassword() {
      let passwordHash = hashSync(this.password, genSaltSync(rounds));
      this.password = passwordHash;
    }

    async validatePassword(password) {
      return compareSync(password, this.password);
    }

  }
  users.init(
    {
      name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
      role_id: DataTypes.INTEGER,
    }, 
    {
      sequelize,
      modelName: 'users',
      underscored: true,
      tableName: 'users',
    }
  );
  return users;
};