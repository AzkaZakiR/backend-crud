"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Store extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // Dari Store ke Tour_Package 'storeId'
      Store.hasMany(models.Tour_Package, {
        foreignKey: {
          name: "storeId",
        },
      });

      // Dari Store ke User 'storeId'
      Store.hasMany(models.User, {
        foreignKey: {
          name: "storeId",
        },
      });
    }
  }
  Store.init(
    {
      name: DataTypes.STRING,
      city: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Store",
    }
  );
  return Store;
};
