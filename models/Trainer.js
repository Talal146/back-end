const { Schema } = require('mongoose')

const trainerSchema = new Schema(
  ({
    name: { type: String, required: true },
    number: { type: Number, required: true },
    email: { type: String, required: true },
    passwordDigest: { type: String, required: true }
  },
  { timestamps: true })
)
module.exports = trainerSchema
