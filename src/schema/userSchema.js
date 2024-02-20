const { model, Schema } = require('mongoose')

let user = new Schema({
    Username: String,
    HashedPassword: String,
});

module.exports = model("user", user);