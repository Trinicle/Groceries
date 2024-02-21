const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
require('dotenv').config({ path: '../.env' });
const userSchema = require('../src/schema/userSchema.js');
mongoose.connect(process.env.DB_STRING);
const salt = Number(process.env.SALT);

const express = require('express');
const app = express();
const cors = require("cors");
console.log("App listen at port 3000");
app.use(express.json());
app.use(cors());
app.get("/", (req, resp) => {
 
    resp.send("App is Working");
    // You can check backend is working or not by 
    // entering http://loacalhost:5000
     
    // If you see App is working means
    // backend working properly
});

app.post("/register", async (req, resp) => {
    const username = req.body.username;
    const password = req.body.password;

    await userSchema.findOne({
        Username: username
    }).then( async (data) => {
        if(!data) {
            const hashed = await bcrypt.hash(password, salt)
            console.log(hashed)

        } else {
            resp.send(`${username} already has a password!`)
        }
    })
    
});

app.post("/login", async (req, resp) => {
    const username = req.body.username;
    const password = req.body.password;

    await userSchema.findOne({
        Username: username
    }).then( async (data) => {
        if(!data) {
            const hashed = await bcrypt.hash(password, salt)
            console.log(hashed)

        } else {
            const hash = await bcrypt.hash(data.password, salt)
            const isMatch = await bcrypt.compare(password, hash)
        }
    })
    
});
app.listen(5000);