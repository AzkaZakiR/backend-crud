const router = require("express").Router();

const booking = require("../controllers/bookingController");
const authenticate = require("../middlewares/authenticate");

// API 
router.get("/:id", authenticate, booking.findBookingById);
router.post("/create", booking.createBooking);
router.get("/get", booking.findBookings);
router.get("/get/:id", booking.findBookingById);
router.post("/create", booking.createBooking);
router.patch("/update/:id", booking.updateBooking);
router.delete("/delete/:id", booking.deleteBooking);


module.exports = router;