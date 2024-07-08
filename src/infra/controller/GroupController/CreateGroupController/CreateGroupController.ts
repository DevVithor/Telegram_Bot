import { CreateGroupUseCase } from "../../../../core/UseCase/GroupUseCase/CreateGroupUseCase/CreateGroupUseCase.js"
import { Request, Response } from "express"

export class CreateGroupController {
    constructor(private createGroup: CreateGroupUseCase) { }

    async execute(req: Request, res: Response) {

        const data = req.body

        const result = await this.createGroup.execute(data)
        res.status(201).json(result)

    }
}