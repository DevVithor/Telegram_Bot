import { PrismaClient } from "@prisma/client";

export class FindManyScriptRepository {
    constructor(private prismaClient: PrismaClient) { }

    async findManyScript(groupId: number) {

        const result = await this.prismaClient.products.findMany({
            where: {
                groupId
            }, select: {
                id: true,
                product: true,
                description: true,
                descont: true,
                link: true
            }
        })

        return result

    }
}