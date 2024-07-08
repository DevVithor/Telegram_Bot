import { PrismaClient } from "@prisma/client";
import Group from "../../../entity/Group.js";

export class CreateGroupRepository {
    constructor(private prismaClient: PrismaClient) { }

    async createGroup(data: Group): Promise<Group> {

        const group = new Group(data)

        const create = await this.prismaClient.group.create({
            data: group
        })

        return create
    }
}

