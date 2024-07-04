import { Router } from "express";
import { startBotController } from "./src/infra/controller/StartBotController/index.js";
import { findGroupController } from "./src/infra/controller/GroupController/FindGroupController/index.js";
import { findScriptController } from "./src/infra/controller/ScriptController/FindScriptController/index.js";
import { createGroupController } from "./src/infra/controller/GroupController/CreateGroupController/index.js";
import { createScriptController } from "./src/infra/controller/ScriptController/CreateScriptUseCase/index.js";
import { deleteGroupController } from "./src/infra/controller/GroupController/DeleteGroupController/index.js";

const route = Router()

route
    .get("/startBot", (req, res) =>
        startBotController.execute(req, res)
    )
    .get("/group/find", (req, res) =>
        findGroupController.execute(req, res)
    )
    .get("/script/find", (req, res) =>
        findScriptController.execute(req, res)
    )
    .post("/group/create", (req, res) =>
        createGroupController.execute(req, res)
    )
    .post("/script/create", (req, res) =>
        createScriptController.execute(req, res)
    )
    .delete("/group/delete", (req, res) =>
        deleteGroupController.execute(req, res)
    );

export default route