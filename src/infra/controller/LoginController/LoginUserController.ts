import { LoginUserUseCase } from "../../../core/UseCase/LoginUserUseCase/LoginUserUseCase.js";
import { Request, Response } from "express"

export class LoginUserController {
    constructor(private loginUser: LoginUserUseCase) { }

    async execute(req: Request, res: Response) {

        const { email, password } = req.body

        const result = await this.loginUser.execute(email, password)
        res.status(200).json(result)
    }
}