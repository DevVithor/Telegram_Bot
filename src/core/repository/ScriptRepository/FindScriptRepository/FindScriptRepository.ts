import { PrismaClient } from "@prisma/client";
import { BadRequest } from "../../../../middleware/BadRequest.js";

export class FindScriptRepository {
    constructor(private prismaClient: PrismaClient) { }

    async findScript(id: number) {

        const result = await this.prismaClient.products.findFirst({
            where: {
                id: id
            }
        })

        if (!result) {

            throw new BadRequest("Roteiro não existe", "O id do Roteiro não existe, indique um valor valido!")

        }
        return result

    }
}