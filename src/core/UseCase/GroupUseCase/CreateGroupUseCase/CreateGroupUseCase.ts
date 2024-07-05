import { PrismaClient } from "@prisma/client";
import { BadRequest } from "../../../../middleware/BadRequest.js";

export class CreateGroupUseCase {
    constructor(private prismaClient: PrismaClient) { }

    async execute(name: string, validity: Date) {

        if (!name) {
            throw new BadRequest("Necessário um nome!", "Erro acontece quando o usuário não coloca um nome ao seu grupo.")
        }

        const data = new Date()

        const definedData = new Date(validity)

        if (definedData < data) {
            throw new BadRequest("Validade inválida!", "A validade foi definda menor que o dia de hoje")
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