import { prismaClient } from "../../../infra/lib/PrismaClient.js";
import { FindPlatformUseCase } from "./FindPlatformUseCase.js";

export const findPlatformUseCase = new FindPlatformUseCase(prismaClient)