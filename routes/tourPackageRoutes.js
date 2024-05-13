const router = require("express").Router();

const tourPackage = require("../controllers/tourPackageController");
const upload = require('../utils/multerConfig')

router.get("/getAll", tourPackage.findTourPackages)
router.get("/:id", tourPackage.findTourPackageById)
router.post("/create", upload.single("image"), tourPackage.createTourPackage);
router.patch("/update/:id", tourPackage.updateTourPackage);
router.delete("/delete/tour/:id", tourPackage.deleteTourPackage);
router.post("/gambar", upload.single("image"), tourPackage.createTourPackage);


module.exports = router