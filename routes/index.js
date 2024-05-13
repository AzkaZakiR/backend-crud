const router = require("express").Router();
const tourRouter = require("./tourPackageRoutes");

/*
    Import other routers here, for example:
    const authRouter = require("./authRouter");
*/
const storeRouter = require("./storeRouter");
const customerRouter = require("./customerRouter");
const bookingRouter = require("./bookingRouter");
const authRouter = require("./authRouter");

/*
    Define other routes here, for example:
    router.use("/api/v1/auth", authRouter);
*/
router.use("/api/v1/customer", customerRouter);
router.use("/api/v1/booking", bookingRouter);
router.use("/api/v1/auth", authRouter);
router.use("/api/v1/tours", tourRouter);
router.use("/api/v1/store", storeRouter);

module.exports = router;
