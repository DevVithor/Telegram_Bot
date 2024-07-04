import { createScriptUseCase } from "../../../../core/UseCase/ScriptUseCase/CreateScriptUseCase/index.js";
import { CreateScriptController } from "./CreateScriptUseCase.js";

export const createScriptController = new CreateScriptController(createScriptUseCase)