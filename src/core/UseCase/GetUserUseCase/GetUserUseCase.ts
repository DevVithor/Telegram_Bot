import { PrismaClient } from "@prisma/client";

export class GetUserUseCase {
    constructor(private database: PrismaClient) { }

    async login(email: string) {

        const findUser = await this.database.user.findFirst({
            where: {
                email
            }
        })

        return findUser
    }
}