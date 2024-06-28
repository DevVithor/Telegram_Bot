import "dotenv/config"
import route from "./routes.js";
import { bot } from "./src/infra/lib/TelegramBot.js";
import express from "express";

const app = express()
app.use(express.json())

const port = 3333;

app.use(route)

bot.launch()

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})