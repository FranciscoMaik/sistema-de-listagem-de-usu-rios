import { knex as settingKnex} from "knex"

export const knex = settingKnex({
    client: "mysql",
    connection: {
        host: "127.0.0.1",
        port: 3306,
        user: "root",
        password: "testmanole",
        database: "manole"
    }
})