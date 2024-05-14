import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { BankTransfer } from "./entity/BankTransfer"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3308,
    username: "root",
    database: "infrend_banking",
    synchronize: true,
    logging: true,
    entities: [User, BankTransfer],
    migrations: [],
    subscribers: [],
})
