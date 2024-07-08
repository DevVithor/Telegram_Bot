import { PrismaClient } from "@prisma/client";
import { ScriptDTO } from "../../../../infra/controller/ScriptController/ScriptDTO.js";

export class CreateScriptRepository {

    constructor(private prismaClient: PrismaClient) { }

    async createScript(data: ScriptDTO) {

        const createProduct = await this.prismaClient.products.create({
            data: {
                link: data.link,
                product: data.product,
                descont: data.descont,
                description: data.description,
                groupId: data.groupId,
            }
        })

        return createProduct

    }
}