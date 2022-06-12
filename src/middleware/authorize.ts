import { HTTPMethods } from "../core/Utility";
import { Middleware } from "./middleware";

export const authorize: Middleware = (req, res, next) => {
    if (req.method === HTTPMethods.POST || req.method === HTTPMethods.GET) {
        if (!req.headers?.authorization) {
            return res.status(401).json({ message: "No authorization header provided" });
        }
        if (req.headers.authorization !== process.env.KEY) {
            return res.status(401).json({ message: "Authorization key invalid" });
        }
    }
    next();
};
