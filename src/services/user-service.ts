import { PrismaClient } from "@prisma/client";
import { CreateUserRequest, LoginRequest, toUserResponse, UserResponse } from "../model/user-model";
import { UserValidation } from "../validation/user-valiation";
import { Validation } from "../validation/validation";
import { prismaClient } from "../application/databases";
import { ResponseError } from "../error/response-error";
import bcrypt from 'bcrypt'
import { v4 as uuid } from "uuid";

export class UserService {
    static async register (request: CreateUserRequest) : Promise<UserResponse> {
        const registerRequest = Validation.validate(UserValidation.REGISTER, request)

        const totalUserWithSameUsername = await prismaClient.user.count({
            where: {
                username: registerRequest.username
            }
        })

        if(totalUserWithSameUsername != 0) {
            throw new ResponseError(400, 'username already exists')
        }

        registerRequest.password = bcrypt.hashSync(registerRequest.password, 10)

        const user = await prismaClient.user.create({
            data: registerRequest
        })

        return toUserResponse(user)
    }

    static async login (request: LoginRequest) : Promise<UserResponse> {
        const loginRequest = Validation.validate(UserValidation.LOGIN, request)

        let user = await prismaClient.user.findUnique({
            where: {
                username: loginRequest.username
            }
        })

        if(!user) {
            throw new ResponseError(401, "Username or Password is invalid!")
        }

        const checkingPassword = await bcrypt.compare(loginRequest.password, user.password)
        if(!checkingPassword) {
            throw new ResponseError(401, "Username or Password is invalid!")
        }

        user = await prismaClient.user.update({
            where: {
                username: loginRequest.username
            },
            data: {
                token: uuid()
            }
        })

        const response = toUserResponse(user)
        response.token = user.token!
        return response
    }
}