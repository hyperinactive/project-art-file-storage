import { ErrorHandler } from "./errorHandlerTypes";

export const defaultErrorHandler: ErrorHandler = (err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }
    res.status(500);
    res.json({ message: err });
};
