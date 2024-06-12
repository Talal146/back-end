const { Schema } = require('mongoose')

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    contact: { type: Number, required: true },
    email: { type: String, required: true },
    passwordDigest: { type: String, required: true },
    weight: { type: Number },
    height: { type: Number },
    trainer: { type: Boolean, required: true },
    trainees: [{ type: Schema.Types.ObjectId, ref: 'User' }]
  },
  { timestamps: true }
)

module.exports = UserSchema
