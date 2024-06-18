import { InlineKeyboard } from "grammy";
import { bot } from "../../../infra/lib/TelegramBot"
import { menus } from "../../entities/menus";
import { buttons } from "../../entities/buttons";
import { scripts } from "../../entities/scripts";

const firstMenuMarkup = new InlineKeyboard().text(buttons.Real_Estate_Fund_Button).text(buttons.Actios_Button).text(buttons.Direct_Treasury_Button);
const BackButton = new InlineKeyboard().text(buttons.backButton)

bot.command("promocoes", async (ctx) => {
    await ctx.reply(menus.firstMenu, {
        parse_mode: "HTML",
        reply_markup: firstMenuMarkup,
    });

});

bot.callbackQuery(buttons.backButton, async (ctx) => {

    await ctx.editMessageText(menus.firstMenu, {
        reply_markup: firstMenuMarkup,
        parse_mode: "HTML",
    });
});

bot.callbackQuery(buttons.Real_Estate_Fund_Button, async (ctx) => {

    await ctx.editMessageText(menus.secondMenu, {
        reply_markup: BackButton,
        parse_mode: "HTML",
    });
});
bot.callbackQuery(buttons.Actios_Button, async (ctx) => {

    await ctx.editMessageText(menus.treeMenu, {
        reply_markup: BackButton,
        parse_mode: "HTML",
    });
});
bot.callbackQuery(buttons.Direct_Treasury_Button, async (ctx) => {

    await ctx.editMessageText(menus.fourMenu, {
        reply_markup: BackButton,
        parse_mode: "HTML",
    });
});

bot.on("message", async (ctx) => {

    await ctx.reply(scripts.script1)

})

export const start = bot.start();


