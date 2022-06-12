import { Request, Response, Router } from "express";

const router = Router();
router.get("*", (req: Request, res: Response) => {
    res.status(200).json({ message: "getting stuff" });
});

router.post("*", (req, res) => {
    res.status(201).json({ message: "posting stuff" });
});

export default router;
