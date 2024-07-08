import { bot } from "../../../infra/lib/TelegramBot.js";
import { deley } from "../../../infra/lib/Timer.js";
import { BadRequest } from "../../../middleware/BadRequest.js";
import { FindGroupRepository } from "../../repository/GroupRepository/FindGroupRepository/FindGroupRepository.js";
import { FindManyScriptRepository } from "../../repository/ScriptRepository/FindManyScriptRepository/FindManyScriptRepository.js";

export class StartBotUseCase {
    constructor(
        private findGroupRepository: FindGroupRepository,
        private findManyScriptRepository: FindManyScriptRepository
    ) { }

    async execute(groupId: number) {

        const findGroup = await this.findGroupRepository.findGroup(groupId)

        if (!findGroup) {

            throw new BadRequest("Grupo não existe", "O id do grupo não existe, indique um valor valido!")
        }

        const findScript = await this.findManyScriptRepository.findManyScript(groupId)

        const validity = findGroup.validity

        while (validity) {

            for (let i = 0; findScript.length > i; i++) {

                const script = `
                
${findScript[i].product}

${findScript[i].description}

${findScript[i].descont}

${findScript[i].link}
                `

                await bot.telegram.sendMessage(`${process.env.CHAT_ID}`, script)

                await deley(43200000)

            }

            let data = new Date()

            if (data > findGroup.validity) {

                return
            }

        }
        return
    }

}



