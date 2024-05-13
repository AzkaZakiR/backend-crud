const multer = require('multer');
const path = require('path');

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './uploads/');
//     },
//     filename: function (req, file, cb) {
//         // Generate a unique file name for each uploaded file
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//         const fileExtension = path.extname(file.originalname);
//         cb(null, file.fieldname + '-' + uniqueSuffix + fileExtension);
//     }
// });
// const upload = multer({ storage: storage });


const multerFiltering = (req, file, cb) => {
    if (
        file.mimetype == "image/png" ||
        file.mimetype == "image/jpg" ||
        file.mimetype == "image/jpeg"
    ) {
        cb(null, true);
    } else {
        return cb(
            new ApiError("hanya menerima format gambar .jpg, .jpeg, dan .png", 400)
        );
    }
};

const upload = multer({
    fileFilter: multerFiltering,
});

module.exports = upload;
