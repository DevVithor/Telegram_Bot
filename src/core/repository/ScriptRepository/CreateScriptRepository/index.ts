import { prismaClient } from "../../../../infra/lib/PrismaClient.js";
import { CreateScriptRepository } from "./CreateScriptReposity.js";

export const createScriptRepository = new CreateScriptRepository(prismaClient)