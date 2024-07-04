import { CreateScriptUseCase } from "../../../../core/UseCase/ScriptUseCase/CreateScriptUseCase/CreateScriptUseCase.js";
import { Request, Response } from "express"

export class CreateScriptController {
    constructor(private createScript: CreateScriptUseCase) { }

    async execute(req: Request, res: Response) {

        const data = req.body

        const result = await this.createScript.execute(data)
        res.status(201).json(result)

    }
}