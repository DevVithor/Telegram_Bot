import { FindGroupUseCase } from "../../../core/UseCase/FindGroupUseCase/FindGroupUseCase.js";
import { Request, Response } from "express"

export class FindGroupController {
    constructor(private findGroup: FindGroupUseCase) { }

    async execute(req: Request, res: Response) {

        const { id } = req.params

        const result = await this.findGroup.execute(Number(id))
        res.status(200).json(result)

    }
}