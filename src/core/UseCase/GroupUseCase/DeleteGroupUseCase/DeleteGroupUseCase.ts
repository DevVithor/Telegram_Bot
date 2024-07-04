import { PrismaClient } from "@prisma/client";

export class DeleteGroupUseCase {
    constructor(private prismaClient: PrismaClient) { }

    async execute(id: number) {

        const findGroup = await this.prismaClient.group.findFirst({
            where: {
                id
            }
        })
        if (!findGroup) {
            throw new Error("Grupo não existe")
        }

        const deleteGroup = await this.prismaClient.group.delete({
            where: {
                id
            }
        })

        return deleteGroup
    }
}