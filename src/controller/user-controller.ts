import { Request, Response, NextFunction } from "express";
import { CreateUserRequest, LoginRequest } from "../model/user-model";
import { UserService } from "../services/user-service";
import { UserRequest } from "../type/user-request";

export class UserController {
    static async register(req: Request, res: Response, next: NextFunction) {
        try {
            const request: CreateUserRequest = req.body as CreateUserRequest
            const response = await UserService.register(request)
            res.status(200).json({
                data: response
            })
        } catch (error) {
            next(error)
        }
    }

    static async login(req: Request, res: Response, next: NextFunction) {
        try {
            const request : LoginRequest = req.body as LoginRequest
            const response = await UserService.login(request)
            res.status(200).json({
                data: response
            })
        } catch (error) {
            next(error)
        }
    }

    static async get(req: UserRequest, res: Response, next: NextFunction) {
        try {
            const response = await UserService.get(req.user!)
            res.status(200).json({
                data: response
            })
        } catch (error) {
            next(error)
        }
    }
}