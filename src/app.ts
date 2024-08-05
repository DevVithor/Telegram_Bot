import "express-async-errors"
import express from "express";
import cors from "cors";

import { errorHandler } from "./middleware/ErrorHandler.js";

import { bot } from "./infra/lib/TelegramBot.js";
import botRouter from "./routes/bot.js";
import groupRouter from "./routes/group.js";
import scriptRouter from "./routes/script.js";
import userRoute from "./routes/user.js";

const app = express()
app.use(cors())
app.use(express.json())

app.use(groupRouter)
app.use(scriptRouter)
app.use(botRouter)
app.use(userRoute)

bot.launch()

app.use(errorHandler)

export default app