"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // Dari Customer ke Booking 'customerId'
      Customer.hasMany(models.Booking, {
        foreignKey: {
          name: "customerId",
        },
      });
    }
  }
  Customer.init(
    {
      name: DataTypes.STRING,
      address: DataTypes.TEXT,
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: {
            msg: "Please enter a valid email",
          },
        },
      },
      phoneNumber: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Customer",
    }
  );
  return Customer;
};
