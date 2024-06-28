import { PrismaClient } from "@prisma/client";


export class FindGroupUseCase {
    constructor(private prismaClient: PrismaClient) { }

    async execute(id: number) {

        const findGroup = this.prismaClient.group.findFirst({
            where: {
                id
            }, include: {
                products: {
                    select: {
                        id: true,
                        product: true,
                        description: true,
                        link: true
                    }
                }
            }
        })

        return findGroup

    }
}