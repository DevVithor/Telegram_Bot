import { createScriptUseCase } from "../../../core/UseCase/CreateScriptUseCase/index.js";
import { CreateScriptController } from "./CreateScriptController.js";

export const createScriptController = new CreateScriptController(
    createScriptUseCase
)