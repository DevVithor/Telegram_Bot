import { PrismaClient } from "@prisma/client";

export class FindScriptUseCase {
    constructor(private prismaClient: PrismaClient) { }

    async execute(id: number) {

        const findScript = await this.prismaClient.products.findFirst({
            where: {
                id: id
            }
        })

        if (!findScript) {

            throw new Error("Script not exists!")

        }
        return findScript
    }
}
