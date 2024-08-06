import { NextFunction, Request, Response } from "express";
import UnauthorizedError from "../Error/Unauthorized.js";
import jwt from "jsonwebtoken";
import { prismaClient } from "../../infra/lib/PrismaClient.js";

type JetPayLoad = {
    id: number
}

export const AuthMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {

    const { authorization } = req.headers

    if (!authorization) {
        throw new UnauthorizedError("Usuario não Autorizado!", "")
    }

    const token = authorization.split(" ")[1]

    const { id } = jwt.verify(token, process.env.JWT_PASS ?? '') as JetPayLoad

    const findUser = await prismaClient.user.findFirst({
        where: {
            id
        }
    })

    if (!findUser) {
        throw new UnauthorizedError("Usuario não Authorizado!", "")
    }

    const { password: _, ...loggedUser } = findUser

    req.findUser = loggedUser
    next()
}