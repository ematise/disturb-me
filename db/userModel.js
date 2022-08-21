const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please provide an Email!"],
        unique: [true, "Email Exist"],
    },
    phone: {
        type: String,
        required: false,
        unique: [true, "Phone exists"],
    },
    password: {
        type: String,
        required: [true, "Please provide a password!"],
        unique: false,
    },
    username: {
        type: String,
        required: false,
        unique: [true, "Username exists"],
    },
    headline: {
        type: String,
        required: false,
        unique: false,
    },
    avatar: {
        type: String,
        required: false,
        unique: false
    }
})
module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);
