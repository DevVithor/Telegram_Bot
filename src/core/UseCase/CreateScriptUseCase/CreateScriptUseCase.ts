import { PrismaClient } from "@prisma/client";
import { dataDTO } from "./dataDTO";

export class CreateScriptUseCase {
    constructor(private prismaClient: PrismaClient) { }

    async execute(data: dataDTO) {

        const createProduct = await this.prismaClient.products.create({
            data: {
                link: data.link,
                product: data.product,
                description: data.description
            }
        })

        // const script =
        //     `
        // 🎊Bem-Vindo as Promoções🎊

        // Promoção do dia!💰💸
        // ${createProduct.Product}
        // ${createProduct.description}
        // ${createLink.id}
        // `

        // return script
        return { createProduct }
    }
}