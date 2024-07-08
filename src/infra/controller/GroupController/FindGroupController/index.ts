import { findGroupUseCase } from "../../../../core/UseCase/GroupUseCase/FindGroupUseCase/index.js";
import { FindGroupController } from "./FindGroupController.js";

export const findGroupController = new FindGroupController(findGroupUseCase)