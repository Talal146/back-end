const mongoose = require('mongoose')
const userSchema = require('./User')
const postSchema = require('./Trainer')

const User = mongoose.model('User', userSchema)
const Post = mongoose.model('Post', postSchema)

module.exports = {
  User,
  Post
}
