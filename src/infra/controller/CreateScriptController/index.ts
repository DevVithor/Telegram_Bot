import { createScriptUseCase } from "../../../core/UseCase/CreateScriptUseCase";
import { CreateScriptController } from "./CreateScriptController";

export const createScriptController = new CreateScriptController(
    createScriptUseCase
)