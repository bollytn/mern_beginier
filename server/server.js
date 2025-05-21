// server.js
const express = require("express") // import express
const cors = require("cors") // import cors

const app = express(); // create an instance of express

app.use(cors()) // Enable CORS for all routes 

const mongoose = require("mongoose"); // import mongoose
mongoose.connect("mongodb+srv://mahjoubibilel:Bg3k6zxGoSrNQyGE@cluster0.njmjimn.mongodb.net/mern_beginer?retryWrites=true&w=majority&appName=Cluster0")


const UserModel = require("./models/Users"); // import the User model

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.get("/users", async(req,res) => {
    const users = await UserModel.find()
    res.json(users)
} )

app.listen(3001, () => {
    console.log("server is running on port 3001");
})