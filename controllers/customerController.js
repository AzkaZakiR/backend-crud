const { Customer } = require("../models");
const ApiError = require("../utils/ApiError");

const findCustomers = async (req, res, next) => {
  try {
    const { CustomerName, createdBy, manufacture, type, page, limit } = req.query;

    const condition = {};

    // Filter by carName
    if (CustomerName) condition.model = { [Op.iLike]: `%${CustomerName}%` };

    // Filter by createdBy
    if (createdBy) condition.createdBy = createdBy;

    // Filter by manufacture
    if (manufacture) condition.manufacture = { [Op.iLike]: `${manufacture}%` };

    // Filter by type
    if (type) condition.type = { [Op.iLike]: `%${type}%` };

    const pageNum = parseInt(page) || 1;
    const pageSize = parseInt(limit) || 10;
    const offset = (pageNum - 1) * pageSize;

    const totalCount = await Customer.count({ where: condition });
    const customers = await Customer.findAll({
      where: condition,
      limit: pageSize,
      offset: offset,
    });

    const totalPages = Math.ceil(totalCount / pageSize);
    
    res.status(200).json({
      status: "Success",
      message: "Customers succesfully retrieved",
      requestAt: req.requestTime,
      data: {
        customers,
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

const findCustomerById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const customer = await Customer.findOne({
      where: {
        id
      },
    });

    if (!customer) {
      return next(new ApiError(`Customer with id '${id}' is not found`, 404));
    }

    res.status(200).json({
      status: "Success",
      message: "Customers succesfully retrieved",
      requestAt: req.requestTime,
      data: {
        customer,
      },
    });
  } catch (err) {
    return next(new ApiError(err.message, 400));
  }
};

const updateCustomer = async (req, res, next) => {
  const { name, address, email, phoneNumber } = req.body;
  try {
    const id = req.params.id;
    const customer = await Customer.findOne({
      where: {
        id,
      },
    });
    if (!customer) {
      return next(new ApiError(`Customer with id '${id}' is not found`, 404));
    }
    await Customer.update(
      {
        name,
        address,
        email,
        phoneNumber,
      },
      {
        where: {
          id
        },
      }
    );
    const updatedCustomer = await Customer.findOne({
      where: {
        id,
      },
    });

    res.status(200).json({
      status: "Success",
      message: "Customers succesfully Update",
      requestAt: req.requestTime,
      data:{
        updatedCustomer
      }
    });
  } catch (err) {
    return next(new ApiError(err.message, 400));
  }
};

const deleteCustomer = async (req, res, next) => {
  try {
    const id = req.params.id;
    const customers = await Customer.findOne({
      where: {
        id
      },
    });

    if (!customers) {
      next(new ApiError(`Customer with id '${id}' is not found`, 404));
    }
    await customers.destroy({
      where: {
        id
      },
    });

    res.status(200).json({
      status: "Success",
      message: `Customer with id '${customers.id}' is successfully deleted`,
      requestAt: req.requestTime,
    });
  } catch (err) {
    return next(new ApiError(err.message, 400));
  }
};

const createCustomer = async (req, res, next) => {
  const { name, address, email, phoneNumber } = req.body;

  try {
    const newCustomer = await Customer.create({
      name,
      address,
      email,
      phoneNumber,
    });

    res.status(200).json({
      status: "Success",
      message: "Customer successfully created",
      requestAt: req.requestTime,
      data: {
        newCustomer,
      },
    });
  } catch (err) {
    return next(new ApiError(err.message, 400));
  }
};

module.exports = {
  findCustomers,
  findCustomerById,
  updateCustomer,
  deleteCustomer,
  createCustomer,
};
