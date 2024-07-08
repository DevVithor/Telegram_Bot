import { prismaClient } from "../../../../infra/lib/PrismaClient.js";
import { CreateGroupRepository } from "./CreateGroupRepository.js";

export const createGroupRepository = new CreateGroupRepository(prismaClient)