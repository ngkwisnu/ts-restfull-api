import express from 'express'
import { authMiddleware } from '../middleware/auth-middleware'
import { UserController } from '../controller/user-controller'

export const apiRouter = express.Router()
apiRouter.use(authMiddleware)

// User API
apiRouter.get('/api/v1/users/current', UserController.get)