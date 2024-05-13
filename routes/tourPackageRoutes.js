const router = require("express").Router();

const tourPackage = require("../controllers/tourPackageController");
const authenticate = require("../middlewares/authenticate");
const upload = require('../utils/multerConfig')

router.get("/getAll", tourPackage.findTourPackages)
router.get("/:id", tourPackage.findTourPackageById)
router.post("/create", authenticate, upload.single("image"), tourPackage.createTourPackage);
router.patch("/update/:id", authenticate, tourPackage.updateTourPackage);
router.delete("/delete/tour/:id", authenticate, tourPackage.deleteTourPackage);
router.post("/gambar", upload.single("image"), tourPackage.createTourPackage);


module.exports = router