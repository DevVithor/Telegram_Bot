import { Request, Response } from "express"
import { StartBotUseCase } from "../../../core/UseCase/StartBotUseCase/StartBotUseCase.js";

export class StartBotController {
    constructor(private startBotUseCase: StartBotUseCase) { }

    async execute(req: Request, res: Response) {

        const { groupId } = req.body

        const results = await this.startBotUseCase.execute(Number(groupId))
        return res.status(200).json(results)

    }

}
