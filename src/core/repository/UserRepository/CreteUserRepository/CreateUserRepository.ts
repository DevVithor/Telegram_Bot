import { PrismaClient } from "@prisma/client";
import { UserDTO } from "../../../../infra/controller/UserController/UserDTO.js";


export class CreateUserRepository {
    constructor(private database: PrismaClient) { }

    async validation(email: string) {

        const findEmail = await this.database.user.findFirst({
            where: {
                email
            }
        })

        return findEmail
    }

    async execute(data: UserDTO) {

        const createUser = await this.database.user.create({
            data: {
                name: data.name,
                surname: data.surname,
                email: data.email,
                password: data.password,
                phone: data.phone
            }
        })

        return createUser

    }
}