import { FastifyInstance } from "fastify"
import { knex } from "../database"
import { v4 as uuidV4 } from "uuid"
import { z } from "zod"

export const usersRoutes = async(app: FastifyInstance) => {
    app.get('/', async () => {
        const users = await knex("users").select("*")
    
        return { users }
    })

    app.get('/:id', async (request) => {
        const getUserParams = z.object({
            id: z.string().uuid()
        })
        const { id } = getUserParams.parse(request.params)

        const user = await knex("users").where({ id }).first()
    
        return { user }
    })

    app.delete('/:id', async (request, reply) => {
        const getUserParams = z.object({
            id: z.string().uuid()
        })
        const { id } = getUserParams.parse(request.params)

        const user = await knex("users").delete().where({ id })
    
        return reply.status(200).send()
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