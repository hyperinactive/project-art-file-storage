import dotenv from "dotenv";
import express, { Request, Response } from "express";
import { authorize } from "./src/middleware/authorize";

dotenv.config();

const port = process.env.PORT || 4000;
const app = express();

app.use(authorize);

app.get("*", (req: Request, res: Response) => {
    res.status(200).json({ message: "getting stuff" });
});

app.post("*", (req, res) => {
    res.status(201).json({ message: "posting stuff" });
});

app.listen(port, () => console.log(`[server]: Server is running at http://localhost:${port}`));
