import { findScriptUseCase } from "../../../../core/UseCase/ScriptUseCase/FindScriptUseCase/index.js";
import { FindScriptController } from "./FindScriptController.js";

export const findScriptController = new FindScriptController(
    findScriptUseCase
)