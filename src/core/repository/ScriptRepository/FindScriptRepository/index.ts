import { prismaClient } from "../../../../infra/lib/PrismaClient.js";
import { FindScriptRepository } from "./FindScriptRepository.js";

export const findScriptRepository = new FindScriptRepository(prismaClient)