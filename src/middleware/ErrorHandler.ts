import { NextFunction, Request, Response } from 'express';
import { ApiError } from './ApiError.js';

export const errorHandler = async (error: ApiError, req: Request, res: Response, next: NextFunction) => {

    console.log(error)
    const statusCode = error.statusCode || 500
    const title = error.message || "Internal Server Error"
    const detail = error.detail

    return res.status(statusCode).json({ title, detail })

}
