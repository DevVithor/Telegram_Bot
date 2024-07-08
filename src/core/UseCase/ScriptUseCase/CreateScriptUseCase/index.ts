import { createScriptRepository } from "../../../repository/ScriptRepository/CreateScriptRepository/index.js";
import { CreateScriptUseCase } from "./CreateScriptUseCase.js";

export const createScriptUseCase = new CreateScriptUseCase(
    createScriptRepository
)