import { findManyScriptUseCase } from "../../../../core/UseCase/ScriptUseCase/FindManyScriptUseCase/index.js";
import { FindManyScriptController } from "./FindManyScriptController.js";

export const findManyScriptController = new FindManyScriptController(findManyScriptUseCase)