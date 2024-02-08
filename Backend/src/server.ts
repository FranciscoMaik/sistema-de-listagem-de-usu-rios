import fastify from "fastify";
import { usersRoutes } from "./routes/users";
import cors from '@fastify/cors'

const app = fastify()

app.register(cors, {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
})

app.register(usersRoutes, {
    prefix: "users"
})

app.listen({
    port: 3333,
}).then(() => {
    console.log("HTTP Server on listen port 3333")
})