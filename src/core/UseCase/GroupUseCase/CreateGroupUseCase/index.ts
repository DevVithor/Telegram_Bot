import { prismaClient } from "../../../../infra/lib/PrismaClient.js";
import { CreateGroupUseCase } from "./CreateGroupUseCase.js";

export const createGroupUseCase = new CreateGroupUseCase(prismaClient)