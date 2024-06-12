const { Schema } = require('mongoose')

const TraineeSchema = new Schema(
  {
    name: { type: String, required: true },
    contact: { type: String, required: true },
    email: { type: String, required: true },
    passwordDigest: { type: String, required: true },
    Weight: { type: Number, required: true },
    height: { type: Number, required: true }
  },
  { timestamps: true }
)

module.exports = TraineeSchema
