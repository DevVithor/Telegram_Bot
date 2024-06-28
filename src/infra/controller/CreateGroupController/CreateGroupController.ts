import { CreateGroupUseCase } from "../../../core/UseCase/CreateGroupUseCase/CreateGroupUseCase.js";
import { Request, Response } from "express"

export class CreateGroupController {
    constructor(private createGroup: CreateGroupUseCase) { }

    async execute(req: Request, res: Response) {

        const { name } = req.body

        const result = await this.createGroup.execute(String(name))
        res.status(201).json(result)

    }
}