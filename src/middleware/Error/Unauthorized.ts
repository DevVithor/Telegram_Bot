import { ApiError } from "./ApiError.js";

export default class UnauthorizedError extends ApiError {
    constructor(title: string, detail: string) {
        super(title)
        this.statusCode = 401
        this.detail = detail
    }
} 