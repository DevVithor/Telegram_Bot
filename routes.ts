import { Router } from "express";
import { getPage } from "./src/core/UseCase/GetPageUseCase.ts";
import { createScriptController } from "./src/infra/controller/CreateScriptController/index.js";

const route = Router()

route
    .get("/", (req, res) =>
        getPage.execute(req, res)
    )
    .post("/create/Product", (req, res) =>
        createScriptController.execute(req, res)
    )

export default route