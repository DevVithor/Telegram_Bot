import { BadRequest } from "../../../../middleware/Error/BadRequest.js";
import { FindScriptRepository } from "../../../repository/ScriptRepository/FindScriptRepository/FindScriptRepository.js";

export class FindScriptUseCase {
    constructor(private findScriptRepository: FindScriptRepository) { }

    async execute(id: number) {

        if (!id) {
            throw new BadRequest("Id invalido", "Verifique se o ID informado é valido")
        }

        const result = this.findScriptRepository.findScript(id)

        return result

    }
}
