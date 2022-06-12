import multer from "multer";
import { MulterFilter } from "./multerTypes";

export const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // error, destination
        cb(null, "./files/");
    },
    filename: function (req, file, cb) {
        // error, file name
        cb(null, Date.now() + file.originalname);
    },
});

const fileFilter: MulterFilter = (req, file, cb) => {
    file.mimetype === "image/jpeg" || file.mimetype === "image/png" ? cb(null, true) : cb(null, false);
};

// init the multer, passing in an object will set its config
export const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1920 * 1920 * 5,
    },
    fileFilter: fileFilter,
});
