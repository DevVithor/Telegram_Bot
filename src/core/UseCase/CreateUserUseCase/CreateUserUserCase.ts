import { UserDTO } from "../../../infra/controller/UserController/UserDTO.js";
import { BadRequest } from "../../../middleware/Error/BadRequest.js";
import { CreateUserRepository } from "../../repository/UserRepository/CreteUserRepository/CreateUserRepository.js";
import bcrypt from "bcrypt"

export class CreateUserUseCase {
    constructor(private userRepository: CreateUserRepository) { }

    async execute(data: UserDTO) {
        const validationEmail = await this.userRepository.validation(data.email)

        if (validationEmail) {
            throw new BadRequest("Email já existe!", "Esse Email já foi cadastrado!")
        }

        if (data.password.length > 20) {

            throw new BadRequest("Senha invalida", "A senha deve conter no maximo 20 digitos!")

        }

        const hashPassword = await bcrypt.hash(data.password, 10)

        data.password = hashPassword

        const result = await this.userRepository.execute(data)

        const { password: _, ...user } = result

        return user

    }


}