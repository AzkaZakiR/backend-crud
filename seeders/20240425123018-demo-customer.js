'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const customers = [
      {
        "name": "Mullen Cotton",
        "address": "703 Foster Avenue, Townsend, Oklahoma, 3440",
        "email": "mullencotton@naxdis.com",
        "phoneNumber": "+62 (821) 481-2357",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Florine Hendrix",
        "address": "872 Cranberry Street, Herbster, Virgin Islands, 7927",
        "email": "florinehendrix@naxdis.com",
        "phoneNumber": "+62 (975) 429-3826",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Fitzgerald Webb",
        "address": "320 Morton Street, Edinburg, Virginia, 7722",
        "email": "fitzgeraldwebb@naxdis.com",
        "phoneNumber": "+62 (820) 419-2719",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Keri Woodard",
        "address": "991 Hall Street, Evergreen, Nebraska, 8321",
        "email": "keriwoodard@naxdis.com",
        "phoneNumber": "+62 (805) 467-3192",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Rodriguez Snyder",
        "address": "489 Chestnut Street, Toftrees, Texas, 3264",
        "email": "rodriguezsnyder@naxdis.com",
        "phoneNumber": "+62 (998) 430-3372",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Baker Hurst",
        "address": "617 Brightwater Avenue, Slovan, Guam, 2257",
        "email": "bakerhurst@naxdis.com",
        "phoneNumber": "+62 (944) 411-3844",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Lowe Mcfarland",
        "address": "645 Clarendon Road, National, Idaho, 7195",
        "email": "lowemcfarland@naxdis.com",
        "phoneNumber": "+62 (906) 511-2616",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Maura Copeland",
        "address": "581 Micieli Place, Garfield, Vermont, 3999",
        "email": "mauracopeland@naxdis.com",
        "phoneNumber": "+62 (837) 563-2922",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Wise Burton",
        "address": "123 Bay Street, Canby, Louisiana, 8700",
        "email": "wiseburton@naxdis.com",
        "phoneNumber": "+62 (832) 425-2657",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Kane Estes",
        "address": "685 Chauncey Street, Ola, New York, 1491",
        "email": "kaneestes@naxdis.com",
        "phoneNumber": "+62 (968) 457-3322",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Jeri Blanchard",
        "address": "383 Bond Street, Bordelonville, District Of Columbia, 5643",
        "email": "jeriblanchard@naxdis.com",
        "phoneNumber": "+62 (879) 439-2996",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Cantrell Cherry",
        "address": "299 Meserole Avenue, Downsville, Northern Mariana Islands, 2585",
        "email": "cantrellcherry@naxdis.com",
        "phoneNumber": "+62 (815) 453-3268",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Chavez Riggs",
        "address": "681 Garland Court, Jardine, Wyoming, 2314",
        "email": "chavezriggs@naxdis.com",
        "phoneNumber": "+62 (870) 553-2583",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Jeannette Beasley",
        "address": "932 Prince Street, Caledonia, Maine, 6039",
        "email": "jeannettebeasley@naxdis.com",
        "phoneNumber": "+62 (931) 449-3958",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Lacy Barrett",
        "address": "446 Reeve Place, Hegins, Ohio, 8830",
        "email": "lacybarrett@naxdis.com",
        "phoneNumber": "+62 (991) 580-2846",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Norman Barnett",
        "address": "251 Gain Court, Cloverdale, Delaware, 3332",
        "email": "normanbarnett@naxdis.com",
        "phoneNumber": "+62 (974) 509-2224",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Young Reed",
        "address": "149 Turnbull Avenue, Jacksonburg, Wisconsin, 3824",
        "email": "youngreed@naxdis.com",
        "phoneNumber": "+62 (933) 537-3473",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Hahn Duran",
        "address": "751 Holmes Lane, Healy, Oregon, 8228",
        "email": "hahnduran@naxdis.com",
        "phoneNumber": "+62 (890) 576-3272",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Eleanor Alexander",
        "address": "643 Aitken Place, Cliff, North Dakota, 3523",
        "email": "eleanoralexander@naxdis.com",
        "phoneNumber": "+62 (944) 425-3455",
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Cooper Ortega",
        "address": "373 Kingsland Avenue, Stewart, Kentucky, 7519",
        "email": "cooperortega@naxdis.com",
        "phoneNumber": "+62 (892) 580-3236",
        "createdAt": new Date(),
        "updatedAt": new Date()
      }
    ]
    return await queryInterface.bulkInsert("Customers", customers);
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Customers', null, {});
  }
};
