import { getUserUseCase } from "../GetUserUseCase/index.js";
import { LoginUserUseCase } from "./LoginUserUseCase.js";

export const loginUserUseCase = new LoginUserUseCase(getUserUseCase)