import { PrismaClient } from "@prisma/client";
import { BadRequest } from "../../../middleware/BadRequest.js";

export class FindPlatformUseCase {
    constructor(private prismaClient: PrismaClient) { }

    async execute(platformId: number) {

        const findPlatform = await this.prismaClient.platform.findFirst({
            where: {
                id: platformId
            }
        })

        if (!findPlatform) {
            throw new BadRequest("Plataforma não cadastrada", "Informa uma plataforma cadastrada")
        }

        return findPlatform
    }
}