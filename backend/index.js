const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");
const cors = require("cors")
const { usersRouter } = require("./routes/UsersRoutes");

const app = express();
//make connection to db
connectDB()

app.use(cors())

app.get("/", (req, res) => {
    res.send("server is running")
})

app.use("/users", usersRouter)


const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})
