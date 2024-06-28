import { prismaClient } from "../../../infra/lib/PrismaClient.js";
import { CreateScriptUseCase } from "./CreateScriptUseCase.js";


export const createScriptUseCase = new CreateScriptUseCase(
    prismaClient
)