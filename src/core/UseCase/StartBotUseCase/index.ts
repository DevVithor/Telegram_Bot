import { findGroupRepository } from "../../repository/GroupRepository/FindGroupRepository/index.js";
import { findManyScriptRepository } from "../../repository/ScriptRepository/FindManyScriptRepository/index.js";
import { StartBotUseCase } from "./StartBotUseCase.js";

export const startBotUseCase = new StartBotUseCase(findGroupRepository, findManyScriptRepository)