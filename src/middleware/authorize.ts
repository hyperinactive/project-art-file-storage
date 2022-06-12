import { Methods } from "../Utility";
import { Middleware } from "./middlewareTypes";

export const authorize: Middleware = (req, res, next) => {
    if (req.method === Methods.POST || req.method === Methods.GET) {
        if (!req.headers?.authorization) {
            return res.status(401).json({ message: "No authorization header provided" });
        }
        if (req.headers.authorization !== process.env.KEY) {
            return res.status(401).json({ message: "Authorization key invalid" });
        }
    }
    next();
};
