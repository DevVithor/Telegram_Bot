import { PrismaClient } from "@prisma/client";

export class CreateGroupUseCase {
    constructor(private prismaClient: PrismaClient) { }

    async execute(name: string, validity: Date) {

        const createGroup = await this.prismaClient.group.create({
            data: {
                name,
                validity,
            }
        })

        return createGroup
    }
}