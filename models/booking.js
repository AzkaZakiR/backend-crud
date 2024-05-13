"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // belongTo dari id Customer
      Booking.belongsTo(models.Customer, {
        foreignKey: {
          name: "customerId",
        },
      });

      // belongTo dari id Tour_Package
      Booking.belongsTo(models.Tour_Package, {
        foreignKey: {
          name: "packageId",
        },
      });
    }
  }
  Booking.init(
    {
      customerId: DataTypes.INTEGER,
      packageId: DataTypes.INTEGER,
      bookingDate: DataTypes.DATE,
      numberOfPeople: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Booking",
    }
  );
  return Booking;
};
