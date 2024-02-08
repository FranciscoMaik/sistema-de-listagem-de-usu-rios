import { FastifyInstance } from "fastify"
import { knex } from "../database"
import { v4 as uuidV4 } from "uuid"
import { z } from "zod"

export const usersRoutes = async(app: FastifyInstance) => {
    app.get('/', async () => {
        const users = await knex("users").select("*")
    
        return users
    })

    app.post('/', async (request, reply) => {
        const createUserBody = z.object({
            name: z.string(),
            email: z.string().email(),
            phone: z.string().min(10).max(11),
            age: z.number().min(1)
        })

        const { age, email, name, phone} = createUserBody.parse(request.body)

        await knex("users").insert({
            id: uuidV4(),
            name,
            email,
            phone,
            age,
        })

        return reply.status(201).send()
    })
}