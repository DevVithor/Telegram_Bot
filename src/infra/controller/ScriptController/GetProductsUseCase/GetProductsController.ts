import { Request, Response } from "express"
import { GetProductsUseCase } from "../../../../core/UseCase/GetProductsUseCase/GetProductsUseCase.js"

export class GetProductsController {
    constructor(private getProducts: GetProductsUseCase) { }

    async execute(req: Request, res: Response) {

        const { products, groupId } = req.body

        const result = await this.getProducts.execute(products, groupId)

        res.status(201).json(result)
    }
}