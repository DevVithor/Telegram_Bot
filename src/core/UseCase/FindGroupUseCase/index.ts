import { prismaClient } from "../../../infra/lib/PrismaClient.js";
import { FindGroupUseCase } from "./FindGroupUseCase.js";

export const findGroupUseCase = new FindGroupUseCase(prismaClient)