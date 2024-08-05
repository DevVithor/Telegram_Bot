import { BadRequest } from "../../../../middleware/Error/BadRequest.js";
import { FindGroupRepository } from "../../../repository/GroupRepository/FindGroupRepository/FindGroupRepository.js";

export class FindGroupUseCase {
    constructor(private findGroupRepository: FindGroupRepository) { }

    async execute(id: number) {

        if (!id) {
            throw new BadRequest("Numero invalido", "Digite um numero valido!")
        }

        const result = await this.findGroupRepository.findGroup(id)

        return result
    }
}