const mongoose = require('mongoose');

const authSchema = mongoose.Schema({
    email: { type: String, required: true, unique : true },
    password: { type: String, required: true },
}, {
    versionKey : false,
    timestamps : true
});

const AuthModel = mongoose.model('auth', authSchema);
module.exports = { AuthModel };