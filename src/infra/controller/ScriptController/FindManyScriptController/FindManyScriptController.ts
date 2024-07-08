import { Request, Response } from "express"
import { FindManyScriptUseCase } from "../../../../core/UseCase/ScriptUseCase/FindManyScriptUseCase/FindManyScriptUseCase.js"

export class FindManyScriptController {
    constructor(private findManyScript: FindManyScriptUseCase) { }

    async execute(req: Request, res: Response) {

        const { groupId } = req.body

        const result = await this.findManyScript.execute(Number(groupId))
        res.status(200).json(result)
    }
}