import { ApiError } from "./ApiError.js"

export class BadRequest extends ApiError {

    constructor(title: string, detail: string) {
        super(title)
        this.statusCode = 400
        this.detail = detail
    }
}
