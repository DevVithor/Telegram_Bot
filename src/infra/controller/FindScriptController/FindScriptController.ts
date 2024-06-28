import { Request, Response } from "express"
import { FindScriptUseCase } from "../../../core/UseCase/DefineScriptUseCase/FindScriptUseCase.js"

export class FindSriptController {
    constructor(private findScript: FindScriptUseCase) { }

    async execute(req: Request, res: Response) {

        const { id } = req.params

        const result = await this.findScript.execute(Number(id))
        res.status(200).json(result)
    }
}