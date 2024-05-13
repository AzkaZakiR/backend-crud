// routes/storeRouter.js
const express = require('express');
const router = express.Router();
const authenticate = require("../middlewares/authenticate");
const storeController = require('../controllers/storeController');

// Get all stores
router.get('/', storeController.getAllStores);

// Get store by ID
router.get('/:id', storeController.getStoreById);

// Create a new store
router.post('/', storeController.createStore);

// Update a store
router.put('/:id', storeController.updateStore);

// Delete a store
router.delete('/:id', storeController.deleteStore);

module.exports = router;
