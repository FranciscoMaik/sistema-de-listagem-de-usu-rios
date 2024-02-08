import fastify from "fastify";
import {knex} from "./database";

const app = fastify()

app.get('/', async () => {
    const user = await knex("users").select("*")

    return user
})

app.listen({
    port: 3333,
}).then(() => {
    console.log("HTTP Server on listen port 3333")
})