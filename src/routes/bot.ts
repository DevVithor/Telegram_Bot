import { Router } from "express";
import { startBotController } from "../infra/controller/StartBotController/index.js";

const botRouter = Router()

botRouter
    .get("/startBot", async (req, res) =>
        startBotController.execute(req, res)
    )


export default botRouter