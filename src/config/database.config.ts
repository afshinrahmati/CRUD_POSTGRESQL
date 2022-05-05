import { Sequelize } from "sequelize";

// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname')

const db = new Sequelize("postgres", "postgresql", "postgresql", {
    host:"localhost",
    // storage: "./database.sqlite",
    dialect: "postgres",
    logging: false
});


export default  db 