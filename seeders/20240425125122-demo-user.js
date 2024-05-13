"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        name: "Hicks Hodge",
        username: "hickshodge",
        password:
          "$2a$10$nxTMTLCL8NfPkz.lPAeKBuUwqFMkL.QJ7DWogzH7ss1veggokkw0W",
        role: "Manager",
        storeId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Maryann Webster",
        username: "maryannwebster",
        password:
          "$2a$10$nxTMTLCL8NfPkz.lPAeKBuUwqFMkL.QJ7DWogzH7ss1veggokkw0W",
        role: "Staff",
        storeId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Jarvis York",
        username: "jarvisyork",
        password:
          "$2a$10$nxTMTLCL8NfPkz.lPAeKBuUwqFMkL.QJ7DWogzH7ss1veggokkw0W",
        role: "Staff",
        storeId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Stephenson Sanders",
        username: "stephensonsanders",
        password:
          "$2a$10$nxTMTLCL8NfPkz.lPAeKBuUwqFMkL.QJ7DWogzH7ss1veggokkw0W",
        role: "Manager",
        storeId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Thompson Stone",
        username: "thompsonstone",
        password:
          "$2a$10$nxTMTLCL8NfPkz.lPAeKBuUwqFMkL.QJ7DWogzH7ss1veggokkw0W",
        role: "Staff",
        storeId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Consuelo Brady",
        username: "consuelobrady",
        password:
          "$2a$10$nxTMTLCL8NfPkz.lPAeKBuUwqFMkL.QJ7DWogzH7ss1veggokkw0W",
        role: "Manager",
        storeId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Gwen Walter",
        username: "gwenwalter",
        password:
          "$2a$10$nxTMTLCL8NfPkz.lPAeKBuUwqFMkL.QJ7DWogzH7ss1veggokkw0W",
        role: "Manager",
        storeId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Jaime Craig",
        username: "jaimecraig",
        password:
          "$2a$10$nxTMTLCL8NfPkz.lPAeKBuUwqFMkL.QJ7DWogzH7ss1veggokkw0W",
        role: "Manager",
        storeId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Julia Maddox",
        username: "juliamaddox",
        password:
          "$2a$10$nxTMTLCL8NfPkz.lPAeKBuUwqFMkL.QJ7DWogzH7ss1veggokkw0W",
        role: "Manager",
        storeId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "John Foley",
        username: "johnfoley",
        password:
          "$2a$10$nxTMTLCL8NfPkz.lPAeKBuUwqFMkL.QJ7DWogzH7ss1veggokkw0W",
        role: "Manager",
        storeId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "French Bernard",
        username: "frenchbernard",
        password:
          "$2a$10$nxTMTLCL8NfPkz.lPAeKBuUwqFMkL.QJ7DWogzH7ss1veggokkw0W",
        role: "Manager",
        storeId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Desiree Noble",
        username: "desireenoble",
        password:
          "$2a$10$nxTMTLCL8NfPkz.lPAeKBuUwqFMkL.QJ7DWogzH7ss1veggokkw0W",
        role: "Manager",
        storeId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cristina Gallegos",
        username: "cristinagallegos",
        password:
          "$2a$10$nxTMTLCL8NfPkz.lPAeKBuUwqFMkL.QJ7DWogzH7ss1veggokkw0W",
        role: "Staff",
        storeId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nina Moody",
        username: "ninamoody",
        password:
          "$2a$10$nxTMTLCL8NfPkz.lPAeKBuUwqFMkL.QJ7DWogzH7ss1veggokkw0W",
        role: "Manager",
        storeId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Millie Good",
        username: "milliegood",
        password:
          "$2a$10$nxTMTLCL8NfPkz.lPAeKBuUwqFMkL.QJ7DWogzH7ss1veggokkw0W",
        role: "Manager",
        storeId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Gay Paul",
        username: "gaypaul",
        password:
          "$2a$10$nxTMTLCL8NfPkz.lPAeKBuUwqFMkL.QJ7DWogzH7ss1veggokkw0W",
        role: "Staff",
        storeId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Jenny Murphy",
        username: "jennymurphy",
        password:
          "$2a$10$nxTMTLCL8NfPkz.lPAeKBuUwqFMkL.QJ7DWogzH7ss1veggokkw0W",
        role: "Staff",
        storeId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bell Whitehead",
        username: "bellwhitehead",
        password:
          "$2a$10$nxTMTLCL8NfPkz.lPAeKBuUwqFMkL.QJ7DWogzH7ss1veggokkw0W",
        role: "Manager",
        storeId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Vinson Contreras",
        username: "vinsoncontreras",
        password:
          "$2a$10$nxTMTLCL8NfPkz.lPAeKBuUwqFMkL.QJ7DWogzH7ss1veggokkw0W",
        role: "Staff",
        storeId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Byrd Santiago",
        username: "byrdsantiago",
        password:
          "$2a$10$nxTMTLCL8NfPkz.lPAeKBuUwqFMkL.QJ7DWogzH7ss1veggokkw0W",
        role: "Manager",
        storeId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Richmond Williams",
        username: "richmondwilliams",
        password:
          "$2a$10$nxTMTLCL8NfPkz.lPAeKBuUwqFMkL.QJ7DWogzH7ss1veggokkw0W",
        role: "Staff",
        storeId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Michael Reese",
        username: "michaelreese",
        password:
          "$2a$10$nxTMTLCL8NfPkz.lPAeKBuUwqFMkL.QJ7DWogzH7ss1veggokkw0W",
        role: "Staff",
        storeId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Washington Cooley",
        username: "washingtoncooley",
        password:
          "$2a$10$nxTMTLCL8NfPkz.lPAeKBuUwqFMkL.QJ7DWogzH7ss1veggokkw0W",
        role: "Manager",
        storeId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Marcia Mathews",
        username: "marciamathews",
        password:
          "$2a$10$nxTMTLCL8NfPkz.lPAeKBuUwqFMkL.QJ7DWogzH7ss1veggokkw0W",
        role: "Staff",
        storeId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mccall Stanley",
        username: "mccallstanley",
        password:
          "$2a$10$nxTMTLCL8NfPkz.lPAeKBuUwqFMkL.QJ7DWogzH7ss1veggokkw0W",
        role: "Manager",
        storeId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Chan Knight",
        username: "chanknight",
        password:
          "$2a$10$nxTMTLCL8NfPkz.lPAeKBuUwqFMkL.QJ7DWogzH7ss1veggokkw0W",
        role: "Manager",
        storeId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Edith Murray",
        username: "edithmurray",
        password:
          "$2a$10$nxTMTLCL8NfPkz.lPAeKBuUwqFMkL.QJ7DWogzH7ss1veggokkw0W",
        role: "Manager",
        storeId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Amber Walker",
        username: "amberwalker",
        password:
          "$2a$10$nxTMTLCL8NfPkz.lPAeKBuUwqFMkL.QJ7DWogzH7ss1veggokkw0W",
        role: "Manager",
        storeId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Lindsay Bass",
        username: "lindsaybass",
        password:
          "$2a$10$nxTMTLCL8NfPkz.lPAeKBuUwqFMkL.QJ7DWogzH7ss1veggokkw0W",
        role: "Manager",
        storeId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nieves Daniels",
        username: "nievesdaniels",
        password:
          "$2a$10$nxTMTLCL8NfPkz.lPAeKBuUwqFMkL.QJ7DWogzH7ss1veggokkw0W",
        role: "Staff",
        storeId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Myers Blackburn",
        username: "myersblackburn",
        password:
          "$2a$10$nxTMTLCL8NfPkz.lPAeKBuUwqFMkL.QJ7DWogzH7ss1veggokkw0W",
        role: "Manager",
        storeId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Allyson Osborn",
        username: "allysonosborn",
        password:
          "$2a$10$nxTMTLCL8NfPkz.lPAeKBuUwqFMkL.QJ7DWogzH7ss1veggokkw0W",
        role: "Staff",
        storeId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Jeanie Sweet",
        username: "jeaniesweet",
        password:
          "$2a$10$nxTMTLCL8NfPkz.lPAeKBuUwqFMkL.QJ7DWogzH7ss1veggokkw0W",
        role: "Manager",
        storeId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Barrett Martin",
        username: "barrettmartin",
        password:
          "$2a$10$nxTMTLCL8NfPkz.lPAeKBuUwqFMkL.QJ7DWogzH7ss1veggokkw0W",
        role: "Manager",
        storeId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Gardner Burris",
        username: "gardnerburris",
        password:
          "$2a$10$nxTMTLCL8NfPkz.lPAeKBuUwqFMkL.QJ7DWogzH7ss1veggokkw0W",
        role: "Staff",
        storeId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bette Mosley",
        username: "bettemosley",
        password:
          "$2a$10$nxTMTLCL8NfPkz.lPAeKBuUwqFMkL.QJ7DWogzH7ss1veggokkw0W",
        role: "Staff",
        storeId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kelly Estrada",
        username: "kellyestrada",
        password:
          "$2a$10$nxTMTLCL8NfPkz.lPAeKBuUwqFMkL.QJ7DWogzH7ss1veggokkw0W",
        role: "Manager",
        storeId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cox Wilson",
        username: "coxwilson",
        password:
          "$2a$10$nxTMTLCL8NfPkz.lPAeKBuUwqFMkL.QJ7DWogzH7ss1veggokkw0W",
        role: "Staff",
        storeId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Dixie Davenport",
        username: "dixiedavenport",
        password:
          "$2a$10$nxTMTLCL8NfPkz.lPAeKBuUwqFMkL.QJ7DWogzH7ss1veggokkw0W",
        role: "Manager",
        storeId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Eugenia Mays",
        username: "eugeniamays",
        password:
          "$2a$10$nxTMTLCL8NfPkz.lPAeKBuUwqFMkL.QJ7DWogzH7ss1veggokkw0W",
        role: "Manager",
        storeId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
