import { Router } from "express";
import { createUserController } from "../infra/controller/UserController/index.js";
import { loginUserController } from "../infra/controller/LoginController/index.js";
import { authController } from "../infra/controller/AuthController/index.js";
import { AuthMiddleware } from "../middleware/Auth/AuthMiddleware.js";

const userRoute = Router()

userRoute
    .post("/users/register", (req, res) =>
        createUserController.execute(req, res)
    )
    .post("/users/login", (req, res) =>
        loginUserController.execute(req, res)
    )
    .get("/auth", AuthMiddleware, (req, res) =>
        authController.execute(req, res)
    )

export default userRoute