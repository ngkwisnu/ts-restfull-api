import express from "express";
import { publicRouter } from "../route/public-api";
import { errorMiddleware } from "../middleware/error-middleware";
import { apiRouter } from "../route/api";

export const web = express()

web.use(express.json())
web.use(publicRouter)
web.use(apiRouter)
web.use(errorMiddleware)

// web.listen(3000, () => {
//     console.log("server listen in port 3000")
// })