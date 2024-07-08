import { createGroupRepository } from "../../../repository/GroupRepository/CreateGroupRepository/index.js";
import { CreateGroupUseCase } from "./CreateGroupUseCase.js";

export const createGroupUseCase = new CreateGroupUseCase(createGroupRepository)