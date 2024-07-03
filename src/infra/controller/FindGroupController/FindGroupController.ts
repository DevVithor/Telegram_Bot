import { PrismaClient } from "@prisma/client";
import { Response } from "express"

export class FindGroupController {
    constructor(private prismaClient: PrismaClient) { }

    async execute(res: Response) {

        const groups = await this.prismaClient.group.findMany({
            select: {
                id: true,
                name: true,
                validity: true,

            }
        })

        return res.status(200).json(groups)

    }
}