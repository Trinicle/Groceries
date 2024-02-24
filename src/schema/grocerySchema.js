const { model, Schema } = require('mongoose')

let grocery = new Schema({
    Name: {
        type: String,
        default: ""
    },
    Quantity: {
        type: String,
        default: ""
    },
});

module.exports = model("grocery", grocery);
