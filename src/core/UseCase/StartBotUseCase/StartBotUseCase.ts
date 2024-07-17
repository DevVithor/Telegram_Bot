import { ScriptDTO } from "../../../infra/controller/ScriptController/ScriptDTO.js";
import { bot } from "../../../infra/lib/TelegramBot.js";
import { deley } from "../../../infra/lib/Timer.js";
export class StartBotUseCase {
    constructor() { }

    async execute(data: ScriptDTO) {

        const script = `
                
${data.product}

${data.description}

${data.descont}

${data.link}
                `

        await bot.telegram.sendMessage(`${process.env.CHAT_ID}`, script)

        await deley(10000)

    }

}



