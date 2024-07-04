import { deleteGroupUseCase } from "../../../../core/UseCase/GroupUseCase/DeleteGroupUseCase/index.js";
import { DeleteGroupController } from "./DeleteGroupController.js";

export const deleteGroupController = new DeleteGroupController(deleteGroupUseCase)