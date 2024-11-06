import { User } from "@prisma/client"

export type UserResponse = {
    username: string,
    name: string,
    token?: string
}

export type CreateUserRequest = {
    username: string,
    name: string,
    password: string
}

export type LoginRequest = {
    username: string,
    password: string
}

export function toUserResponse (user: User): UserResponse {
    return {
        name: user.name,
        username: user.username
    }
}