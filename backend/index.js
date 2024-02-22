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
    const firstname = req.body.firstname;
    const lastname = req.body.lastname

    // let user = await userSchema.findOne({ Username: username })
    let user = await userSchema.findOne({ Username: username })
    if(!user) {
        const hashed = await bcrypt.hash(password, salt)
        user = await userSchema.create({
            Username: username,
            HashedPassword: hashed,
            FirstName: firstname,
            LastName: lastname,
        })
        resp.send({
            "error": false
        })
    } else {
        resp.send({
            "error": true
        })
    }
});

app.post("/login", async (req, resp) => {
    const username = req.body.username;
    const password = req.body.password;

    await userSchema.findOne({
        Username: username
    }).then( async (data) => {
        if(!data) {
            resp.send({
                "message": `${username} does not have a login!`,
                "matched": false
            })
        } else {
            const isMatch = await bcrypt.compare(password, data.HashedPassword)
            resp.send({
                "matched": isMatch
            })
        }
        return
    })
    
});

app.post("/", async (req, resp) => {
    const user  = req.body.user;

    const userData = await userSchema.findOne({
        Username: user
    })
    resp.send({ userData })
})
app.listen(5000);