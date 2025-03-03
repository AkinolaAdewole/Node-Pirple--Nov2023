const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    item: { type: String, required: true },
    time: { type: String, required: true },
    date: { type: String, required: true },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // Make sure this matches the actual user model name
        required: true
    }
});

const todoModel = mongoose.model("Todo", todoSchema);

module.exports = todoModel;
