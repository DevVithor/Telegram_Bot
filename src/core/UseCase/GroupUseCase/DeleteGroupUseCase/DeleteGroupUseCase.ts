import { BadRequest } from "../../../../middleware/Error/BadRequest.js";
import { DeleteGroupRepository } from "../../../repository/GroupRepository/DeleteGroupRepository/DeleGroupRepository.js";

export class DeleteGroupUseCase {

    constructor(private deleteGroupReposity: DeleteGroupRepository) { }

    async execute(id: number) {

        if (!id) {

            throw new BadRequest("Numero invalido", "Insira um numero valido!")

        }

        const result = await this.deleteGroupReposity.deleteGroup(id)

        return result

    }
}