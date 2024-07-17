import { Request, Response } from "express"
import { FindPlatformUseCase } from "../../../core/UseCase/PlatformUseCase/FindPlatformUseCase.js";

export class PlatformController {
    constructor(private findPlatform: FindPlatformUseCase) { }

    async execute(req: Request, res: Response) {

        const platformId = req.body

        const result = this.findPlatform.execute(platformId)
        res.status(200).json(result)

    }
}