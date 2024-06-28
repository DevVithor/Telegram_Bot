import { findScriptUseCase } from "../../../core/UseCase/DefineScriptUseCase/index.js";
import { FindSriptController } from "./FindScriptController.js";

export const findScriptController = new FindSriptController(
    findScriptUseCase
)