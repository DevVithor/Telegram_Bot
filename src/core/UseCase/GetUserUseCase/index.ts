import { prismaClient } from "../../../infra/lib/PrismaClient.js";
import { GetUserUseCase } from "./GetUserUseCase.js";

export const getUserUseCase = new GetUserUseCase(prismaClient)