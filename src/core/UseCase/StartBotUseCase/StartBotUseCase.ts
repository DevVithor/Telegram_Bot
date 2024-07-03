import { PrismaClient } from "@prisma/client";
import { bot } from "../../../infra/lib/TelegramBot.js";
import { deley } from "../../../infra/lib/Timer.js";

export class StartBotUseCase {
    constructor(private prismaClient: PrismaClient) { }

    async execute(groupId: number) {

        const findGroup = await this.prismaClient.group.findFirst({
            where: {
                id: groupId
            }

        })

        if (!findGroup) {

            throw new Error("error")
        }

        const getProducts = await this.prismaClient.products.findMany({
            where: {
                groupId
            }, select: {
                product: true,
                description: true,
                link: true,
                descont: true,
            }
        })

        const validity = findGroup.validity

        while (validity) {

            for (let i = 0; getProducts.length > i; i++) {

                const script = `
${getProducts[i].product}

${getProducts[i].description}

${getProducts[i].descont}

${getProducts[i].link}
                `

                await bot.telegram.sendMessage(`${process.env.CHAT_ID}`, script)

                await deley(60000)

            }

            let data = new Date()

            if (data > findGroup.validity) {

                return
            }

        }
        return
    }

}



