import fastify from "fastify";
import { usersRoutes } from "./routes/users";
import fastifyCors from "@fastify/cors";

const app = fastify()

app.register(fastifyCors, {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
})

app.register(usersRoutes, {
    prefix: "users"
})

app.listen({
    port: 5555,
}).then(() => {
    console.log("HTTP Server on listen port 5555")
})