import { Request, Response } from "express"
import cron from "node-cron"
import { GetProductsUseCase } from "../../../../core/UseCase/GetProductsUseCase/GetProductsUseCase.js"

export class GetProductsController {
    constructor(private getProducts: GetProductsUseCase) { }

    async execute(req: Request, res: Response) {

        const { platformId, interval } = req.body
        const products = req.body

        for (let i = 0; products.length > i; i++) {
            console.log(products[i])
        }

        cron.schedule(String(interval), async () => {

            const result = await this.getProducts.execute(products, platformId)
            res.status(201).json(result)

        })
    }
}