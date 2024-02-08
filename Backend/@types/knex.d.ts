import { Knex } from "knex"

declare module "knex/types/tables" {
    export interface Tables {
        users: {
            id: string
            name: string
            email: string
            age: number
            phone: string
            created_at: string
        }
    }
}