import { createUserRepository } from "../../repository/UserRepository/CreteUserRepository/index.js";
import { CreateUserUseCase } from "./CreateUserUserCase.js";

export const createUserUseCase = new CreateUserUseCase(createUserRepository)