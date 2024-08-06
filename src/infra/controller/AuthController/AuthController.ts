import { Request, Response } from "express";

export class AuthController {
    constructor() { }

    async execute(req: Request, res: Response) {
        return res.json(req.findUser)
    }
}