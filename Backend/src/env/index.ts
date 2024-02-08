import "dotenv/config"
import { z } from "zod"

const envSchema = z.object({
    DATABASE_PORT: z.number(),
    DATABASE_USER: z.string(),
    DATABASE_PASSWORD: z.string(),
    DATABASE: z.string()
})

const _env = envSchema.safeParse(process.env)

if(_env.success === false) {
    console.error("Invalid environment variables", _env.error.format())
    throw new Error("Invalid environment variables")
}

export const env = _env.data