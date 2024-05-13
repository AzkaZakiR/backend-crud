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
    const bookings = [
      {
        "customerId": 1,
        "packageId": 2,
        "bookingDate": "2014-08-10T07:58:21 -07:00",
        "numberOfPeople": 20,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "customerId": 4,
        "packageId": 2,
        "bookingDate": "2022-06-08T04:20:34 -07:00",
        "numberOfPeople": 19,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "customerId": 4,
        "packageId": 2,
        "bookingDate": "2024-02-29T03:01:35 -07:00",
        "numberOfPeople": 19,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "customerId": 3,
        "packageId": 5,
        "bookingDate": "2014-05-28T01:13:08 -07:00",
        "numberOfPeople": 20,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "customerId": 3,
        "packageId": 3,
        "bookingDate": "2022-08-19T01:47:36 -07:00",
        "numberOfPeople": 18,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "customerId": 1,
        "packageId": 4,
        "bookingDate": "2017-08-01T02:45:25 -07:00",
        "numberOfPeople": 13,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "customerId": 1,
        "packageId": 4,
        "bookingDate": "2016-04-16T05:54:01 -07:00",
        "numberOfPeople": 15,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "customerId": 2,
        "packageId": 5,
        "bookingDate": "2016-05-21T11:25:27 -07:00",
        "numberOfPeople": 12,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "customerId": 1,
        "packageId": 4,
        "bookingDate": "2015-03-24T10:40:40 -07:00",
        "numberOfPeople": 18,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "customerId": 1,
        "packageId": 1,
        "bookingDate": "2022-06-30T06:18:11 -07:00",
        "numberOfPeople": 11,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "customerId": 4,
        "packageId": 2,
        "bookingDate": "2019-02-20T01:30:10 -07:00",
        "numberOfPeople": 10,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "customerId": 5,
        "packageId": 2,
        "bookingDate": "2021-07-30T09:27:58 -07:00",
        "numberOfPeople": 13,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "customerId": 3,
        "packageId": 5,
        "bookingDate": "2014-10-25T10:49:10 -07:00",
        "numberOfPeople": 14,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "customerId": 5,
        "packageId": 5,
        "bookingDate": "2014-11-21T12:24:32 -07:00",
        "numberOfPeople": 19,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "customerId": 3,
        "packageId": 2,
        "bookingDate": "2018-01-12T08:05:44 -07:00",
        "numberOfPeople": 16,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "customerId": 4,
        "packageId": 4,
        "bookingDate": "2016-01-16T03:37:27 -07:00",
        "numberOfPeople": 19,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "customerId": 5,
        "packageId": 4,
        "bookingDate": "2024-01-15T01:50:42 -07:00",
        "numberOfPeople": 14,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "customerId": 5,
        "packageId": 4,
        "bookingDate": "2019-10-13T11:50:45 -07:00",
        "numberOfPeople": 14,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "customerId": 4,
        "packageId": 3,
        "bookingDate": "2018-04-23T07:05:24 -07:00",
        "numberOfPeople": 15,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "customerId": 2,
        "packageId": 2,
        "bookingDate": "2022-12-04T11:33:18 -07:00",
        "numberOfPeople": 20,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "customerId": 3,
        "packageId": 5,
        "bookingDate": "2018-04-20T02:19:25 -07:00",
        "numberOfPeople": 11,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "customerId": 1,
        "packageId": 5,
        "bookingDate": "2014-08-07T08:46:00 -07:00",
        "numberOfPeople": 20,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "customerId": 5,
        "packageId": 2,
        "bookingDate": "2017-06-29T11:23:59 -07:00",
        "numberOfPeople": 10,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "customerId": 1,
        "packageId": 1,
        "bookingDate": "2022-01-01T02:59:41 -07:00",
        "numberOfPeople": 14,
        "createdAt": new Date(),
        "updatedAt": new Date()
      }
    ]
    return await queryInterface.bulkInsert("Bookings", bookings);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Bookings", null, {});
  }
};
