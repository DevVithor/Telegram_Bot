import { Request, Response } from "express"
import { CreateUserUseCase } from "../../../core/UseCase/CreateUserUseCase/CreateUserUserCase.js"

export class CreateUserController {
    constructor(private userUseCase: CreateUserUseCase) { }

    async execute(req: Request, res: Response) {

        const data = req.body

        console.log(data)

        const result = await this.userUseCase.execute(data)
        res.status(201).json(result)

    }
}