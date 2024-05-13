"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // belongTo dari id Store
      User.belongsTo(models.Store, {
        foreignKey: {
          name: "storeId",
        },
      });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      role: {
        type: DataTypes.ENUM(["Manager", "Staff"]),
        defaultValue: "Staff",
      },
      storeId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
