import { NextFunction, Request, Response } from 'express';
import { ApiError } from './Error/ApiError.js';

export const errorHandler = async (error: ApiError, req: Request, res: Response, next: NextFunction) => {

    const statusCode = error.statusCode || 500
    const title = error.message || "Internal Server Error"
    const detail = error.detail

    res.status(statusCode).json({ title, detail })

}
