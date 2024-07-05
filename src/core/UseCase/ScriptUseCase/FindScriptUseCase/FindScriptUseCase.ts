import { PrismaClient } from "@prisma/client";
import { BadRequest } from "../../../../middleware/BadRequest.js";

export class FindScriptUseCase {
    constructor(private prismaClient: PrismaClient) { }

    async execute(id: number) {

        const findScript = await this.prismaClient.products.findFirst({
            where: {
                id: id
            }
        })

        if (!findScript) {

            throw new BadRequest("Roteiro não existe", "O id do Roteiro não existe, indique um valor valido!")

        }
        return findScript
    }
}
