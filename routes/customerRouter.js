const router = require("express").Router();


const customer = require("../controllers/customerController");

// route untuk menambah data
router.post("/create", customer.createCustomer);
// route untuk mengambil semua data
router.get("/get", customer.findCustomers);
// route untuk mengambil data sesuai id
router.get("/get/:id", customer.findCustomerById);
// route untuk mengedit data sesuai id
router.patch("/update/:id", customer.updateCustomer);
// route untuk menghapus data sesuai dengan id
router.delete("/delete/:id", customer.deleteCustomer);

module.exports = router;
