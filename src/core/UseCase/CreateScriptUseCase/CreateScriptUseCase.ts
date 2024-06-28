import { PrismaClient } from "@prisma/client";
import { dataDTO } from "./dataDTO.js";

export class CreateScriptUseCase {
    constructor(private prismaClient: PrismaClient) { }

    async execute(data: dataDTO) {

        const createProduct = await this.prismaClient.products.create({
            data: {
                link: data.link,
                product: data.product,
                description: data.description,
                groupId: data.groupId,
            }
        })

        return createProduct
    }
}