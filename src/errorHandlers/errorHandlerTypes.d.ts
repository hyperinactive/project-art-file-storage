import { NextFunction, Request, Response } from "express";

export type ErrorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => any;
