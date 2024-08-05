import { UserDTO } from "../../../infra/controller/UserController/UserDTO.js";
import { BadRequest } from "../../../middleware/Error/BadRequest.js";
import { CreateUserRepository } from "../../repository/UserRepository/CreteUserRepository/CreateUserRepository.js";


export class CreateUserUseCase {
    constructor(private userRepository: CreateUserRepository) { }

    async execute(data: UserDTO) {
        const validationPhone = await this.userRepository.validation(data.phone)

        if (validationPhone) {
            throw new BadRequest("Numero já existe!", "Esse numero já esta cadastrado")
        }

        if (data.phone.length > 13) {

            throw new BadRequest("Numero invalido!", "Digite apenas os numeros!")

        }

        if (data.password.length > 20) {

            throw new BadRequest("Senha invalida", "A senha deve conter no maximo 20 digitos!")

        }

        const result = await this.userRepository.execute(data)

        return result

    }


}