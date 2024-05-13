"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Stores", [
      {
        name: "Dianne Giles",
        city: "Hatteras",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Roxanne Good",
        city: "Monument",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Tabitha Villarreal",
        city: "National",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Tammy Solomon",
        city: "Cumminsville",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mayo Yang",
        city: "Axis",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Eloise Gibson",
        city: "Bynum",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Hodges Abbott",
        city: "Belmont",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Barr Lamb",
        city: "Westwood",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Barbra Barr",
        city: "Crown",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Noemi Holden",
        city: "Hondah",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Crystal Grimes",
        city: "Englevale",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Howell Gould",
        city: "Enlow",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Hester Kerr",
        city: "Deputy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sandy Branch",
        city: "Slovan",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Velma Morgan",
        city: "Woodlands",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kristy Morse",
        city: "Bowie",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ruby Hardy",
        city: "Wells",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Savage Young",
        city: "Grazierville",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "David Parks",
        city: "Mathews",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Rochelle Knight",
        city: "Beaverdale",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Wendy Talley",
        city: "Caspar",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Morales Goodwin",
        city: "Brule",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ferguson Kramer",
        city: "Dragoon",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Randi Rodriquez",
        city: "Edgar",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Shawn Morrison",
        city: "Hollymead",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Montoya Alexander",
        city: "Devon",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Holly Salazar",
        city: "Freeburn",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Jo Snider",
        city: "Bendon",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Erica Sandoval",
        city: "Ventress",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Saundra Soto",
        city: "Fairview",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Adkins Rosario",
        city: "Jeff",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Joyce Mcfarland",
        city: "Nicut",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Shepherd Hooper",
        city: "Castleton",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Stores", null, {});
  },
};
