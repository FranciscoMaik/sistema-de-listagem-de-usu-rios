import { knex as settingKnex, Knex} from "knex"

export const config: Knex.Config = {
    client: "mysql",
    connection: {
        host: "127.0.0.1",
        port: 3306,
        user: "root",
        password: "testmanole",
        database: "manoletest"
    },
    migrations: {
        extension: "ts",
        directory: "./db/migrations"
    }
}

export const knex = settingKnex(config)