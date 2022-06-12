import { Middleware } from "./middlewareTypes";

interface IError extends Error {
    status?: number;
}

export const nonexistentUrl: Middleware = (req, res, next) => {
    const error: IError = new Error("URL not found");
    error.status = 404;
    error.message = "Url does not exist";
    next(error);
};
