const { Booking } = require("../models");
const ApiError = require("../utils/ApiError")

const findBookings = async (req, res, next) => {
  try {
    const { BookingName, createdBy, manufacture, type, page, limit } = req.query;

    const condition = {};

    if (BookingName) condition.model = { [Op.iLike]: `%${BookingName}%` };

    if (createdBy) condition.createdBy = createdBy;

    if (manufacture) condition.manufacture = { [Op.iLike]: `${manufacture}%` };

    if (type) condition.type = { [Op.iLike]: `%${type}%` };

    const pageNum = parseInt(page) || 1;
    const pageSize = parseInt(limit) || 10;
    const offset = (pageNum - 1) * pageSize;

    const totalCount = await Booking.count({ where: condition });
    const bookings = await Booking.findAll({
      where: condition,
      limit: pageSize,
      offset: offset,
    });

    const totalPages = Math.ceil(totalCount / pageSize);
    
    res.status(200).json({
      status: "Success",
      message: "Booking succesfully retrieved",
      requestAt: req.requestTime,
      data: {
        bookings,
        pagination: {
          totalData: totalCount,
          totalPages,
          pageNum,
          pageSize,
        },
      },
    });
  } catch (err) {
    return next(new ApiError(err.message, 400));
  }
};

const findBookingById = async (req, res, next) => {
  try {
    const bookings = await Booking.findOne({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json({
      status: "Success",
      data: {
        bookings,
      },
    });
  } catch (err) {
    next(new ApiError(err.message, 400));
  }
};

const createBooking = async (req, res, next) => {
  const { customerId, packageId, bookingDate, numberOfPeople } = req.body

  try {
    const newBooking = await Booking.create({
      customerId,
      packageId,
      bookingDate,
      numberOfPeople,
    });

    res.status(200).json({
      status: "Success",
      data: {
        newBooking,
      },
    });
  } catch (err) {
    next(new ApiError(err.message, 400));
  }
};

const updateBooking = async (req, res, next) => {
  const { customerId, packageId, bookingDate, numberOfPeople } = req.body;
  try {

    const booking = await Booking.findOne({
      where: {
        id,
      },
    });


    if (!booking) {
      return next(new ApiError(`Data with id '${id}' is not found`, 404));
    }


    await Booking.update(
      {
        customerId,
        packageId,
        bookingDate,
        numberOfPeople,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );


    res.status(200).json({
      status: "Success",
      message: "Success Update Booking",
    });
  } catch (err) {
    next(new ApiError(err.message, 400));
  }
};

const deleteBooking = async (req, res, next) => {
  try {
    const bookings = await Booking.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!bookings) {
      next(new ApiError(`Data with id '${id}' is not found`, 404));
    }

    await bookings.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json({
      status: "Success",
      message: "Succes Delete Booking",
    });
  } catch (err) {
    next(new ApiError(err.message, 400));
  }
};


module.exports = {
  findBookings,
  findBookingById,
  createBooking,
  updateBooking,
  deleteBooking
};