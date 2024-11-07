import supertest from "supertest"
import {web} from '../src/application/web'
import {logger} from "../src/application/logging"
import { UserTest } from "./test.util"

describe('POST /api/v1/users', () => {

    afterEach(async() => {
        await UserTest.delete()
    })

    it('should reject register new user if request is invalid', async () => {
        const response = await supertest(web)
            .post('/api/v1/users')
            .send({
                username: "",
                password: "",
                name: ""
            })
        
        logger.debug(response.body)
        expect(response.status).toBe(400)
        expect(response.body.errors).toBeDefined()
    })

    it('should register new user', async () => {
        const response = await supertest(web)
            .post('/api/v1/users')
            .send({
                username: "test",
                password: "test",
                name: "test"
            })
        
        logger.debug(response.body)
        expect(response.status).toBe(200)
        expect(response.body.data.username).toBe('test')
    })

})

describe('POST /api/v1/users/login', () => {

    beforeEach(async () => {
        await UserTest.create()
    })

    afterEach(async () => {
        await UserTest.delete()
    })

    it('should reject login if username is wrong', async () => {
        const response = await supertest(web)
            .post('/api/v1/users/login')
            .send({
                username: "salah",
                password: "test",
            })
        
        logger.debug(response.body)
        expect(response.status).toBe(401)
        expect(response.body.errors).toBeDefined()
    })

    it('should reject login if password is wrong', async () => {
        const response = await supertest(web)
            .post('/api/v1/users/login')
            .send({
                username: "test",
                password: "salah",
            })
        
        logger.debug(response.body)
        expect(response.status).toBe(401)
        expect(response.body.errors).toBeDefined()
    })

    it('should login successfully', async () => {
        const response = await supertest(web)
            .post('/api/v1/users/login')
            .send({
                username: "test",
                password: "test",
            })
        
        logger.debug(response.body)
        expect(response.status).toBe(200)
        expect(response.body.data.token).toBeDefined()
    })

})

describe('GET /api/v1/users/current', () => {

    it('should be reject get user if token invalid', async () => {
        const response = await supertest(web)
            .get('/api/v1/users/current')
            .set("X-TOKEN-API", "wrong-token")

        logger.debug(response.body)
        expect(response.status).toBe(401)
        expect(response.body.errors).toBeDefined()
    })

    it('should be able to get user', async () => {
        const response = await supertest(web)
            .get('/api/v1/users/current')
            .set("X-TOKEN-API", "06c92f55-3ba7-4792-911a-0c017a947ff4")
        
        logger.debug(response.body)
        expect(response.status).toBe(200)
        expect(response.body.data.username).toBe("Wisnu")
        expect(response.body.data.name).toBe("Ngakan Wisnu")
    })

})