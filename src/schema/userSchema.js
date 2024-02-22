const { model, Schema } = require('mongoose')

let user = new Schema({
    Username: {
        type: String,
        required: true
    },
    HashedPassword: {
        type: String,
        required: true
    },
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    Recipe: {
        type: Array,
        default: []
    },
    Grocery: {
        type: Array,
        default: []
    },
    Picture: {
        type: String,
        default: "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
    }
});

module.exports = model("user", user);
