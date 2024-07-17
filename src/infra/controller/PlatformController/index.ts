import { findPlatformUseCase } from "../../../core/UseCase/PlatformUseCase/index.js";
import { PlatformController } from "./PlatformController.js";

export const platformController = new PlatformController(findPlatformUseCase)