import { loginUserUseCase } from "../../../core/UseCase/LoginUserUseCase/index.js";
import { LoginUserController } from "./LoginUserController.js";

export const loginUserController = new LoginUserController(loginUserUseCase)