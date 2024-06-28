import { startBotUseCase } from "../../../core/UseCase/StartBotUseCase/index.js";
import { StartBotController } from "./StartBotController.js";

export const startBotController = new StartBotController(startBotUseCase)