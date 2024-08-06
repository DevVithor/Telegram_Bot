import { BadRequest } from "../../../middleware/Error/BadRequest.js";
import { GetUserUseCase } from "../GetUserUseCase/GetUserUseCase.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export class LoginUserUseCase {
    constructor(private findUser: GetUserUseCase) { }

    async execute(email: string, password: string) {

        const LoginValidation = await this.findUser.login(email)

        if (!LoginValidation) {
            throw new BadRequest("Email ou Senha invalidos", "Digite novamente")
        }

        const verifyPass = await bcrypt.compare(password, LoginValidation.password)

        if (!verifyPass) {
            throw new BadRequest("Email ou Senha invalidos", "Digite novamente")
        }

        const token = jwt.sign({ id: LoginValidation.id }, process.env.JWT_PASS ?? '', { expiresIn: '2h' })

        const { password: _, ...user } = LoginValidation

        const result = { user, token }

        return result

    }
}