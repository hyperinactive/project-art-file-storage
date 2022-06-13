import { IError } from "../errors";
import { Middleware } from "./middlewareTypes";

export const nonexistentUrl: Middleware = (req, res, next) => {
    const error: IError = new Error("URL not found");
    error.status = 404;
    next(error);
};
