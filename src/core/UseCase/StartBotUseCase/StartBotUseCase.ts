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
                link: true
            }
        })

        for (let i = 0; getProducts.length > i; i++) {

            const script = `
                🎊Bem-Vindo as Promoções🎊

                Promoção do dia ${getProducts[i].product}💰💸
                ${getProducts[i].description}
                ${getProducts[i].link}
                `

            await bot.telegram.sendMessage("@VithorChatBot", script)

            await deley(2000)

        }

        return
    }


}



