import { prismaClient } from "../../../../infra/lib/PrismaClient.js";
import { DeleteGroupUseCase } from "./DeleteGroupUseCase.js";

export const deleteGroupUseCase = new DeleteGroupUseCase(prismaClient)