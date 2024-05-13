const { Tour_Package } = require('../models');
const ApiError = require('../utils/ApiError');
const { Op } = require("sequelize");

require("dotenv").config()
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const ImageKit = require('../utils/imageKit')


const uploadImage = async (file) => {
  try {
    const split = file.originalname.split(".");
    const extension = split[split.length - 1];

    // upload file ke imagekit
    const uploadedImage = await ImageKit.upload({
      file: file.buffer,
      fileName: `IMG-${Date.now()}.${extension}`,
      folder: 'coba'
    });
    if (!uploadedImage) {
      return next(new ApiError("server gagal mengupload gambar", 500));
    }
    return uploadedImage.url;
  } catch (err) {
    return err.message;
  }
};

const createTourPackage = async (req, res, next) => {
  const { packageName, price, description, destination, duration } = req.body;

  try {
    const storeId = 1;
    const file = req.file;

    if (!file || !packageName || !price || !description || !destination || !duration) {
      return res.status(400).json({
        status: 'error',
        message: 'No file uploaded',
      });
    }
    let image;
    if (file) {
      image = await uploadImage(file);
    }
    const newTourPackage = await Tour_Package.create({
      packageName,
      image,
      price,
      description,
      destination,
      duration,
      storeId
    })
    res.status(200).json({
      status: "Success",
      data: {
        newTourPackage
      },
    });
    console.log("Ini image", image);
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message
    });
  }
}
const findTourPackageById = async (req, res, next) => {
  try {
    const tourPackage = await Tour_Package.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!tourPackage) {
      return next(
        new ApiError(`tourPackage with this ${req.params.id} is not exist`, 404)
      );
    }
    res.status(200).json({
      status: "Success",
      data: {
        tourPackage,
      },
    });
  } catch (err) {
    next(new ApiError(err.message, 400));
  }
};
const findTourPackages = async (req, res, next) => {
  try {
    const { tourName, username, shop, page, limit } = req.query;

    const condition = {};
    if (tourName) condition.name = { [Op.iLike]: `%${tourName}%` };

    const includeTourCondition = {};
    if (shop) includeTourCondition.name = { [Op.iLike]: `%${shop}%` };

    const includeUserCondition = {};
    if (username) includeUserCondition.name = { [Op.iLike]: `%${username}%` };

    const pageNum = parseInt(page) || 1;
    const pageSize = parseInt(limit) || 10;
    const offset = (pageNum - 1) * pageSize;

    let whereCondition = condition;

    const totalCount = await Tour_Package.count({ where: whereCondition });

    const tourPackages = await Tour_Package.findAll({
      where: whereCondition,
      order: [["id", "ASC"]],
      attributes: ['id', 'packageName', 'description', 'image', 'price', 'destination', 'duration', 'storeId'],
      limit: pageSize,
      offset: offset,
    });

    const totalPages = Math.ceil(totalCount / pageSize);

    res.status(200).json({
      status: "Success",
      data: {
        tourPackages,
        pagination: {
          totalData: totalCount,
          totalPages,
          pageNum,
          pageSize,
        },
      },
    });
  } catch (error) {
    next(new ApiError(error.message, 400));
  }
};
const oldCreateTourPackage = async (req, res, next) => {
  const { packageName, image, price, description, destination, duration, storeId } = req.body;

  try {
    const newTourPackage = await Tour_Package.create({
      packageName,
      image,
      price,
      description,
      destination,
      duration,
      storeId
    })
    res.status(200).json({
      status: "Success",
      data: {
        newTourPackage
      },
    });
  } catch (error) {
    next(new ApiError(error.message, 400));
  }
}

const updateTourPackage = async (req, res, next) => {
  const { packageName, image, price, description, destination, duration, storeId } = req.body;
  const tourId = req.params.id;
  try {
    if (!tourId) {
      next(new ApiError("Please provide a tour ID", 404));
    }
    await Tour_Package.update(
      {
        packageName,
        image,
        price,
        description,
        destination,
        duration,
        storeId
      },
      {
        where: {
          id: tourId
        }
      });

    res.status(200).json({
      status: "Success",
      message: "successfully update TOur Package"
    });
  } catch (error) {
    next(new ApiError(error.message, 400));
  }
}

const deleteTourPackage = async (req, res, next) => {
  const id = req.params.id;

  try {
    const deletedRows = await Tour_Package.destroy({
      where: {
        id,
      }
    })
    if (deletedRows === 0) {
      return res.status(404).json({
        status: "Error",
        message: "Tour package not found",
      });
    }
    res.status(200).json({
      status: "Success",
      message: "Success delete product",
    });
  } catch (error) {
    next(new ApiError(error.message, 400));
  }
}

module.exports = { createTourPackage, findTourPackageById, findTourPackages, updateTourPackage, deleteTourPackage, }




//