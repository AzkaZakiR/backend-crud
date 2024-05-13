const router = require("express").Router();

const authController = require("../controllers/authController");

const authenticate = require("../middlewares/authenticate");

router.post("/register", authenticate, authController.register);
router.post("/login", authController.login);

router.get("/me", authenticate, authController.checkUser);

module.exports = router;
