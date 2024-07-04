import { Router } from "express";

import { findScriptController } from "../infra/controller/ScriptController/FindScriptController/index.js";
import { createScriptController } from "../infra/controller/ScriptController/CreateScriptUseCase/index.js";

const scriptRouter = Router()

scriptRouter
    .get("/script/find", async (req, res) =>
        findScriptController.execute(req, res)
    )
    .post("/script/create", async (req, res) =>
        createScriptController.execute(req, res)
    )

export default scriptRouter