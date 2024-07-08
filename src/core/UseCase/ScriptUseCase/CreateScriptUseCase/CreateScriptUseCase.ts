import { ScriptDTO } from "../../../../infra/controller/ScriptController/ScriptDTO.js";
import { CreateScriptRepository } from "../../../repository/ScriptRepository/CreateScriptRepository/CreateScriptReposity.js";
import { Script } from "../../../entity/Script.js";
import { BadRequest } from "../../../../middleware/BadRequest.js";

export class CreateScriptUseCase {
    constructor(private createScriptRepository: CreateScriptRepository) { }

    async execute(data: ScriptDTO): Promise<Script> {

        if (!data) {
            throw new BadRequest("Informações invalidas", "Verifique se está tudo correto!")
        }

        const result = this.createScriptRepository.createScript(data)

        return result

    }
}