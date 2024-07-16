import { Router } from "express";

import { findScriptController } from "../infra/controller/ScriptController/FindScriptController/index.js";
import { createScriptController } from "../infra/controller/ScriptController/CreateScriptUseCase/index.js";
import { findManyScriptController } from "../infra/controller/ScriptController/FindManyScriptController/index.js";
import { getProductsController } from "../infra/controller/ScriptController/GetProductsUseCase/index.js";

const scriptRouter = Router()

scriptRouter
    .get("/script/find", async (req, res) =>
        findScriptController.execute(req, res)
    )
    .get("/script/findMany", async (req, res) =>
        findManyScriptController.execute(req, res)
    )
    .get("/script/products", async (req, res) =>
        getProductsController.execute(req, res)
    )
    .post("/script/create", async (req, res) =>
        createScriptController.execute(req, res)
    )

export default scriptRouter