import { Router } from "express";
import { createScriptController } from "./src/infra/controller/CreateScriptController/index.js";
import { findScriptController } from "./src/infra/controller/FindScriptController/index.js";
import { startBotController } from "./src/infra/controller/StartBotController/index.js";
import { createGroupController } from "./src/infra/controller/CreateGroupController/index.js";
import { findGroupController } from "./src/infra/controller/FindGroupController/index.js";

const route = Router()

route
    .get("/find/group", (req, res) =>
        findGroupController.execute(res)
    )
    .get("/find/:id", (req, res) =>
        findScriptController.execute(req, res)
    )
    .post("/create/Product", (req, res) =>
        createScriptController.execute(req, res)
    )
    .get("/script", (req, res) =>
        startBotController.execute(req, res)
    )
    .post("/group/create", (req, res) =>
        createGroupController.execute(req, res)
    )

export default route