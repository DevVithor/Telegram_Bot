import { PrismaClient } from "@prisma/client";

export class CreateGroupUseCase {
    constructor(private prismaClient: PrismaClient) { }

    async execute(name: string, validity: Date) {

        if (!name) {
            throw new Error("Insira um valor valido!")
        }

        const data = new Date()

        if (validity < data) {
            throw new Error("A validade precisa ser maior que o dia de hoje!")
        }

        const createGroup = await this.prismaClient.group.create({
            data: {
                name,
                validity,
            }
        })



        return createGroup
    }
}