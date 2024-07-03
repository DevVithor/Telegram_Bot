import { prismaClient } from "../../lib/PrismaClient.js";
import { FindGroupController } from "./FindGroupController.js";

export const findGroupController = new FindGroupController(prismaClient)