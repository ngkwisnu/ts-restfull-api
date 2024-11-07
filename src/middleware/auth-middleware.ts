import { Response, NextFunction } from "express";
import { prismaClient } from "../application/databases";
import { UserRequest } from "../type/user-request";

export const authMiddleware = async (req: UserRequest, res: Response, next: NextFunction) => {

    const token = req.get('X-TOKEN-API')

    if(token) {
        const user = await prismaClient.user.findFirst({
            where: {
                token: token
            }
        })
    
        if(user) {
            req.user = user
            return next()
        }
    }
    
    res.status(401).json({
        status: false,
        errors: "Unautorized!"
    }).end()

}