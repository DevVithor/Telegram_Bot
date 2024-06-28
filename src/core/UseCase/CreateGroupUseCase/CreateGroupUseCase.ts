import { PrismaClient } from "@prisma/client";

export class CreateGroupUseCase {
    constructor(private prismaClient: PrismaClient) { }

    async execute(name: string) {

        const createGroup = await this.prismaClient.group.create({
            data: {
                name
            }
        })

        return createGroup
    }
}