const mongoose = require('mongoose')

const UsersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    }
})

const Users = mongoose.model('users', UsersSchema)

module.exports = Users
