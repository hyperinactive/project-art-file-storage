import { Request } from "express";

export type MulterFilter = (req: Request, file: Express.Multer.File, cb: Function) => any;
