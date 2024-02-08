import { FastifyInstance } from "fastify"
import { knex } from "../database"

export const usersRoutes = async(app: FastifyInstance) => {
    app.get('/users', async () => {
        const users = await knex("users").select("*")
    
        return users
    })
}