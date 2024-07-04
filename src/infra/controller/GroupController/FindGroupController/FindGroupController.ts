import { Request, Response } from "express"
import { FindGroupUseCase } from "../../../../core/UseCase/GroupUseCase/FindGroupUseCase/FindGroupUseCase.js"

export class FindGroupController {
    constructor(private findGroup: FindGroupUseCase) { }

    async execute(req: Request, res: Response) {

        const { id } = req.body

        const result = await this.findGroup.execute(Number(id))
        res.status(200).json(result)
    }
}