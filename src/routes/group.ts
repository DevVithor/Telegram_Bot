import express from "express";

import { findGroupController } from "../infra/controller/GroupController/FindGroupController/index.js";
import { createGroupController } from "../infra/controller/GroupController/CreateGroupController/index.js";
import { deleteGroupController } from "../infra/controller/GroupController/DeleteGroupController/index.js";

const groupRouter = express.Router()

groupRouter
    .get("/group/find", async (req, res) =>
        findGroupController.execute(req, res)
    )
    .post("/group/create", async (req, res) =>
        createGroupController.execute(req, res)
    )
    .delete("/group/delete", async (req, res) =>
        deleteGroupController.execute(req, res)
    );

export default groupRouter

