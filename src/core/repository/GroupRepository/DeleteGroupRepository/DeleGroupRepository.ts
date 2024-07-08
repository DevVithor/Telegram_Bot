import { PrismaClient } from "@prisma/client";
import { BadRequest } from "../../../../middleware/BadRequest.js";

export class DeleteGroupRepository {
    constructor(private prismaClient: PrismaClient) { }

    async deleteGroup(id: number) {

        const findGroup = await this.prismaClient.group.findFirst({
            where: {
                id
            }
        })
        if (!findGroup) {
            throw new BadRequest("Grupo não existe", "O id do grupo não existe, indique um valor valido!")
        }
        console.log(id)
        const deleteGroup = await this.prismaClient.group.delete({
            where: {
                id
            }
        })

        return deleteGroup

    }
}