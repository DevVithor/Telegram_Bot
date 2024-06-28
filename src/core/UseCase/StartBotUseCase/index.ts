import { prismaClient } from "../../../infra/lib/PrismaClient.js";
import { StartBotUseCase } from "./StartBotUseCase.js";

export const startBotUseCase = new StartBotUseCase(prismaClient)