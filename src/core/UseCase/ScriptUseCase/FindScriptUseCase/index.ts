import { prismaClient } from "../../../../infra/lib/PrismaClient.js";
import { FindScriptUseCase } from "./FindScriptUseCase.js";

export const findScriptUseCase = new FindScriptUseCase(
    prismaClient
)