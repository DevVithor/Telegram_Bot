import { DeleteGroupUseCase } from "../../../../core/UseCase/GroupUseCase/DeleteGroupUseCase/DeleteGroupUseCase.js";
import { Request, Response } from "express"

export class DeleteGroupController {
    constructor(private deleteGroup: DeleteGroupUseCase) { }

    async execute(req: Request, res: Response) {

        const { id } = req.body

        const result = await this.deleteGroup.execute(Number(id))
        return res.status(200).json(result)
    }
}