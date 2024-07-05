export abstract class ApiError extends Error {
    public statusCode: number
    public detail?: string = "bad_request"

    constructor(message: string, detail?: string) {
        super(message)
        this.statusCode = 500
        this.detail = detail
    }
}
