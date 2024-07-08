import { prismaClient } from "../../../../infra/lib/PrismaClient.js";
import { DeleteGroupRepository } from "./DeleGroupRepository.js";

export const deleteGroupRepository = new DeleteGroupRepository(prismaClient)