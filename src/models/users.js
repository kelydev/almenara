'use strict';
import { hashSync, genSaltSync, compareSync } from "bcrypt";
//import { rounds } from "../config/auth";

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    
    static associate(models) {

      this.belongsTo(models.roles, {
        foreignKey: "role_id",
        targetKey: "id",
      });

      this.hasOne(models.shopping_cart, {
        //as:'models.shopping_cart',
        foreignKey: "user_id",
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