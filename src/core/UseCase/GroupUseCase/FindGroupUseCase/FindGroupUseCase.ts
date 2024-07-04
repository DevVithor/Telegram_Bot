import { PrismaClient } from "@prisma/client";


export class FindGroupUseCase {
    constructor(private prismaClient: PrismaClient) { }

    async execute(id: number) {

        const findGroup = await this.prismaClient.group.findFirst({
            where: {
                id
            }
        })

        if (!findGroup) {
            throw new Error("Grupo não existe!")
        }

        return findGroup
    }
}