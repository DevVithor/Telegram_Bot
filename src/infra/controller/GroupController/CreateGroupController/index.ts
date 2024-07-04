import { createGroupUseCase } from "../../../../core/UseCase/GroupUseCase/CreateGroupUseCase/index.js";
import { CreateGroupController } from "./CreateGroupController.js";

export const createGroupController = new CreateGroupController(createGroupUseCase)