import { Methods } from "../Utility";
import { Middleware } from "./middlewareTypes";

export const cors: Middleware = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

    if (req.method === Methods.OPTIONS) {
        res.header("Access-Control-Allow-Methods", "POST, GET");
        return res.status(200).json({});
    }
    next();
};
