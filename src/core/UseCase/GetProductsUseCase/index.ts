import { createScriptRepository } from "../../repository/ScriptRepository/CreateScriptRepository/index.js";
import { findGroupUseCase } from "../GroupUseCase/FindGroupUseCase/index.js";
import { GetProductsUseCase } from "./GetProductsUseCase.js";

export const getProductsUseCase = new GetProductsUseCase(findGroupUseCase, createScriptRepository)