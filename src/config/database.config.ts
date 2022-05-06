import { Sequelize, DataTypes, UUIDV4 } from "sequelize";

// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname')

const db = new Sequelize("postgres", "postgresql", "postgresql", {
    host: "localhost",
    // storage: "./database.sqlite",
    dialect: "postgres",
    logging: false
});
const queryInterface = db.getQueryInterface();

queryInterface.changeColumn("first", "id", {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true
})
export default db 