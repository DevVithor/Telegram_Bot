import { findScriptRepository } from "../../../repository/ScriptRepository/FindScriptRepository/index.js";
import { FindScriptUseCase } from "./FindScriptUseCase.js";

export const findScriptUseCase = new FindScriptUseCase(
    findScriptRepository
)