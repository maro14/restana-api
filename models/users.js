const mongoose = require('mongoose')

const UsersSchema = new mongoose.Schema({
    name: String
})

const Users = mongoose.model('users', UsersSchema)

module.exports = Users
