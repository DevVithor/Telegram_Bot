import { createUserUseCase } from "../../../core/UseCase/CreateUserUseCase/index.js";
import { CreateUserController } from "./CreateUserController.js";


export const createUserController = new CreateUserController(createUserUseCase)