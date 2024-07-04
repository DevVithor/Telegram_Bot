import { NextFunction, Request, Response } from 'express';

export const errorHandler = async (

    error: Error,
    req: Request,
    res: Response,
    next: NextFunction,

) => {
    const statusCode = 500
    const message = error.message || "deu erro"
    return res.status(statusCode).json(message)
};
