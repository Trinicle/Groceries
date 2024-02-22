const { model, Schema } = require('mongoose')

let recipe = new Schema({
    Name: {
        type: String,
        default: ""
    },
    Description: {
        type: String,
        default: ""
    },
    Instructions: {
        type: String,
        default: ""
    },
    Ingredients: {
        type: Array,
        default: []
    }
});

module.exports = model("recipe", recipe);
