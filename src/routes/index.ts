import { Request, Response, Router } from "express";
import { IError } from "../errors";
import { upload } from "../middleware";
import { promises as Fs } from "fs";

const router = Router();
router.get("/", async (req: Request, res: Response) => {
    const filename = req.query?.filename;

    if (!filename) {
        return res.status(400).json({ message: "Filename not provided" });
    }
    const assetsPath = appRoot.slice(0, -4) + "\\files";
    try {
        await Fs.access(assetsPath);
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: "Filename not valid, resource doesn't exist" });
    }
    const pathToFile = assetsPath + "\\" + filename;
    res.sendFile(pathToFile);
});

router.post("/", upload.single("image"), (req, res, next) => {
    if (!req.file) {
        const error: IError = new Error();
        error.status = 400;
        error.message = "No file provided";

        return res.status(400).json({ error: error });
    }
    return res.status(201).json({ message: `File created successfully`, filename: req.file.filename });
});

export default router;
