import { findGroupRepository } from "../../../repository/GroupRepository/FindGroupRepository/index.js";
import { FindGroupUseCase } from "./FindGroupUseCase.js";

export const findGroupUseCase = new FindGroupUseCase(findGroupRepository)