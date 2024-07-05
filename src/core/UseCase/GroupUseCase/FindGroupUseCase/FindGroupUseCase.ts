import { PrismaClient } from "@prisma/client";
import { BadRequest } from "../../../../middleware/BadRequest.js";


export class FindGroupUseCase {
    constructor(private prismaClient: PrismaClient) { }

    async execute(id: number) {

        const findGroup = await this.prismaClient.group.findFirst({
            where: {
                id
            }
        })

        if (!findGroup) {
            throw new BadRequest("Grupo não existe", "O id do grupo não existe, indique um valor valido!")
        }

        return findGroup
    }
}