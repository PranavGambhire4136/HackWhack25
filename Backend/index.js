import express from 'express'
import dotenv from 'dotenv'
import router from './routes/route.js';
import {connectDB} from './Config/DBConnect.js';
import cookieParser from 'cookie-parser';
import cors from "cors"



dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.use(cors());

app.use(express.json());
app.use(cookieParser())

app.use("/api/v1", router);


app.get("/", (req, res) => {
    res.send("|| Shree Ganeshay Namah ||");
})



app.listen(PORT, () => {
    console.log("server started");
    connectDB();
})