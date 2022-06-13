import multer from "multer";
import { MimeTypes } from "../Utility";
import { MulterFilter } from "./multerTypes";
import { v4 as uuidv4 } from "uuid";

export const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // error, destination
        const destination = appRoot + "\\files";
        console.log(destination, "dest");
        cb(null,  "./files");
    },
    filename: function (req, file, cb) {
        // error, file name
        const filename = uuidv4() + "." + file.mimetype.split("/")[1];
        cb(null, filename);
    },
});

const fileFilter: MulterFilter = (req, file, cb) => {
    file.mimetype === MimeTypes.JPEG || file.mimetype === MimeTypes.PNG ? cb(null, true) : cb(null, false);
};

// init the multer, passing in an object will set its config
export const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1920 * 1920 * 5,
    },
    fileFilter: fileFilter,
});
