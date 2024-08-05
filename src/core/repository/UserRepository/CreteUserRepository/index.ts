import { prismaClient } from "../../../../infra/lib/PrismaClient.js";
import { CreateUserRepository } from "./CreateUserRepository.js";

export const createUserRepository = new CreateUserRepository(prismaClient)