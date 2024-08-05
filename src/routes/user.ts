import { Router } from "express";
import { createUserController } from "../infra/controller/UserController/index.js";

const userRoute = Router()

userRoute.
    post("/users/create", (req, res) => {
        createUserController.execute(req, res)
    })

export default userRoute