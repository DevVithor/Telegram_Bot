import { Request, Response } from "express"
import cron from "node-cron"
import { GetProductsUseCase } from "../../../../core/UseCase/GetProductsUseCase/GetProductsUseCase.js"

export class GetProductsController {
    constructor(private getProducts: GetProductsUseCase) { }

    async execute(req: Request, res: Response) {

        const { products, platformId, interval } = req.body

        cron.schedule(String(interval), async () => {

            const result = await this.getProducts.execute(products, platformId)
            res.status(201).json(result)

        })
    }
}