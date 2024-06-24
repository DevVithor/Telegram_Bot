import { CreateScriptUseCase } from "../../../core/UseCase/CreateScriptUseCase/CreateScriptUseCase";
import { Request, Response } from "express"
import { dataDTO } from "../../../core/UseCase/CreateScriptUseCase/dataDTO";

export class CreateScriptController {
    constructor(private createScript: CreateScriptUseCase) { }

    async execute(req: Request, res: Response) {

        const data: dataDTO = req.body
        console.log(data)
        const response = await this.createScript.execute(data)
        return res.status(201).json(response)
    }

}


