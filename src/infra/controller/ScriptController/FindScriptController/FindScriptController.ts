import { Request, Response } from "express"
import { FindScriptUseCase } from "../../../../core/UseCase/ScriptUseCase/FindScriptUseCase/FindScriptUseCase.js"

export class FindScriptController {
    constructor(private findScript: FindScriptUseCase) { }

    async execute(req: Request, res: Response) {

        const { id } = req.body

        const result = await this.findScript.execute(Number(id))
        res.status(200).json(result)
    }
}