const multer = require('multer')
const errors = require('restify-errors')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname );
    }
});
  
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(new errors.BadRequestError('Only JPEG and PNG files are allowed'));
    }
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter
});

module.exports = {upload}