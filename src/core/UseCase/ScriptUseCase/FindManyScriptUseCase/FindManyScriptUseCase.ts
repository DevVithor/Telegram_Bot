import { BadRequest } from "../../../../middleware/BadRequest.js";
import { FindManyScriptRepository } from "../../../repository/ScriptRepository/FindManyScriptRepository/FindManyScriptRepository.js";

export class FindManyScriptUseCase {
    constructor(private findManyScriptRepository: FindManyScriptRepository) { }

    async execute(groupId: number) {

        if (!groupId) {
            throw new BadRequest("Numero Invalido", "Verifique se o numero é valido!")
        }

        const result = await this.findManyScriptRepository.findManyScript(groupId)

        return result
    }
}