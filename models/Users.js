const mongoose = require('mongoose');

const UsersSchema = mongoose.Schema({
    name: {type: String, required: true, },
    role: {type: String, required: true, enum: ['admin', 'normal', 'company']},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true}
})
const User = mongoose.model("User", UsersSchema);

module.exports = User;