import { findPlatformUseCase } from "../PlatformUseCase/index.js";
import { startBotUseCase } from "../StartBotUseCase/index.js";
import { GetProductsUseCase } from "./GetProductsUseCase.js";

export const getProductsUseCase = new GetProductsUseCase(findPlatformUseCase, startBotUseCase)