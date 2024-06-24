import { prismaClient } from "../../../infra/lib/PrismaClient";
import { CreateScriptUseCase } from "./CreateScriptUseCase";


export const createScriptUseCase = new CreateScriptUseCase(
    prismaClient
)