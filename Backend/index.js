import express from 'express'
import dotenv from 'dotenv'



dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
    res.send("|| Shree Ganeshay Namah ||");
})

app.listen(PORT, () => {
    console.log("server started");
})