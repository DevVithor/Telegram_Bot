import { prismaClient } from "../../../../infra/lib/PrismaClient.js";
import { FindGroupRepository } from "./FindGroupRepository.js";

export const findGroupRepository = new FindGroupRepository(prismaClient)