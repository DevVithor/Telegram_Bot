import { Telegraf } from "telegraf";

export const bot = new Telegraf(`${process.env.TELEGRAM_TOKEN}`);

