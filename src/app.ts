import "express-async-error"
import express from "express";

import { errorHandler } from "./middleware/ErrorHandler.js";
import { bot } from "./infra/lib/TelegramBot.js";

import botRouter from "./routes/bot.js";
import groupRouter from "./routes/group.js";
import scriptRouter from "./routes/script.js";

const app = express()
app.use(express.json())

app.use(groupRouter)
app.use(scriptRouter)
app.use(botRouter)

bot.launch()

app.use(errorHandler)

export default app
