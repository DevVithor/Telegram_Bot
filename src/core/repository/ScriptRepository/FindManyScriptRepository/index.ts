import { prismaClient } from "../../../../infra/lib/PrismaClient.js";
import { FindManyScriptRepository } from "./FindManyScriptRepository.js";

export const findManyScriptRepository = new FindManyScriptRepository(prismaClient)