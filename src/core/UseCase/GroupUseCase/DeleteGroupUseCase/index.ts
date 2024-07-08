import { deleteGroupRepository } from "../../../repository/GroupRepository/DeleteGroupRepository/index.js";
import { DeleteGroupUseCase } from "./DeleteGroupUseCase.js";

export const deleteGroupUseCase = new DeleteGroupUseCase(deleteGroupRepository)