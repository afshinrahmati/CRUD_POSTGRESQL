import express, { Request, Response } from "express";
import db from "./config/database.config";
import morgan from "morgan";
import User from "./db/user.sequlize";
import { v4 as uuidv4 } from 'uuid';

const app = express();
const port = 3000;
const { MORGAN_FORMAT = "combined" } = process.env;
app.use(morgan("combined"));

app.use(express.json());
db.sync().then(() => {
    console.log("successful Connect To POSTGRESQL");

})

app.get("/", (req: Request, res: Response) => { 
    return res.send("8000")
});

app.post("/", async (req: Request, res: Response) => {
    const id = uuidv4();
    console.log({ id });

    const result = await User.create({ ...req.body })

    return res.json({ message: "successfuly", data: result })
})

app.listen(port, () => {
    console.log('\x1b[33m%s\x1b[0m', `${port} is run`);
})