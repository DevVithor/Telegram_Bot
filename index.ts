import "dotenv/config"
import { start } from "./src/core/UseCase/StartBotUseCase/LayoutBotUseCase"
import express from "express"
import route from "./routes"

const app = express()
app.use(express.json())

const port = 3333;

app.use(route)

start

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})