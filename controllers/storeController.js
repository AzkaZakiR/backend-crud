const { Store } = require("../models");
const ApiError = require("../utils/ApiError");
const { Op } = require("sequelize");

const createStore = async (req, res) => {
    // Destructuring object
    const { name, city} = req.body;

    try {
        const newStore = await Store.create({
            name,
            city
        });

        res.status(200).json({
            status: "Success",
            message: "Store successfully created",
            requestAt: req.requestTime,

            data: {
                newStore
            }
        });
    } catch (err) {
        next(new ApiError(err.message, 400));
        return;
    }
};

const getStoreById = async (req, res) => {
    const storeId = req.params.id;

    try {
        const store = await Store.findByPk(storeId);

        if (!store) { 
            next(new ApiError("Store not found", 400));
        return;
        }

        res.status(200).json({
            status: "Success",
            message : `Store with id '${id}' is successfully retrieved`,
            requestAt : req.requestTime,

            data: {
                store
            }
        });
    } catch (err) {
        next(new ApiError(err.message, 400));
        return;
    }
};


const getAllStores = async (req, res) => {
    try {
    const { name, city, page, limit } = req.query;

    const condition = {};

    // Filter by storeName
    if (name) condition.name= { [Op.iLike]: `%${name}%` };

    // Filter by storeCity
    if (city) condition.city = { [Op.iLike]: `%${city}%` };

    const pageNum = parseInt(page) || 1;
    const pageSize = parseInt(limit) || 10;
    const offset = (pageNum - 1) * pageSize;

    const totalCount = await Store.count({ where: condition });
        const stores = await Store.findAll({
            where: condition,
            limit: pageSize,
            offset: offset,
        });

        const totalPages = Math.ceil(totalCount / pageSize);

        res.status(200).json({
            status: "Success",
            message : "Stores succesfully retrieved" ,
            requestAt : req.requestTime,
            data: {
                stores
            },
            pagination: {
        totalData: totalCount,
        totalPages,
        pageNum,
        pageSize,
        },
        });
    } catch (err) {
        next(new ApiError(err.message, 400));
        return;
    }
};

const updateStore = async (req, res) => {
    const storeId = req.params.id;
    const { name, city } = req.body;

    try {
        let store = await Store.findByPk(storeId);

        if (!store) {
            next(new ApiError("Store not found", 400));
        return;
        }

        store = await store.update({
            name,
            city
        });

        res.status(200).json({
            status: "Success",
            message : "Store Successfully Updated",
            requestAt : req.requestTime,
            data: {
                updatedStore : store
            }
        });
    } catch (err) {
        next(new ApiError(err.message, 400));
        return;
    }
};

const deleteStore = async (req, res) => {
    const storeId = req.params.id;

    try {
        const store = await Store.findByPk(storeId);

        if (!store) {
            next(new ApiError("Store not found", 400));
        return;
        }

        await store.destroy();

        res.status(200).json({
            status: "Success",
            message: "Store deleted successfully",
            requestAt: req.requestTime
        });
    } catch (err) {
        next(new ApiError(err.message, 400));
        return;
    }
};

module.exports = {
    createStore,
    getStoreById,
    getAllStores,
    updateStore,
    deleteStore
};
