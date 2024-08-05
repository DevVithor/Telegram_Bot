import { BadRequest } from "../../../../middleware/Error/BadRequest.js";
import { CreateGroupRepository } from "../../../repository/GroupRepository/CreateGroupRepository/CreateGroupRepository.js";
import { GroupDTO } from "../../../../infra/controller/GroupController/GroupDTO.js";
import Group from "../../../entity/Group.js";

export class CreateGroupUseCase {
    constructor(private createGroupRepository: CreateGroupRepository) { }

    async execute(data: GroupDTO): Promise<Group> {

        if (!data.name) {
            throw new BadRequest("Necessário um nome!", "Erro acontece quando o usuário não coloca um nome ao seu grupo.")
        }

        const datas = new Date()

        const definedData = new Date(data.validity)

        if (definedData < datas) {
            throw new BadRequest("Validade invalida!", "A validade foi definda menor que o dia de hoje")
        }

        const createGroup = await this.createGroupRepository.createGroup(data)

        return createGroup
    }
}