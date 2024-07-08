import { findManyScriptRepository } from "../../../repository/ScriptRepository/FindManyScriptRepository/index.js";
import { FindManyScriptUseCase } from "./FindManyScriptUseCase.js";

export const findManyScriptUseCase = new FindManyScriptUseCase(findManyScriptRepository)