const { Schema } = require('mongoose')

const reviewSchema = new Schema(
  {
    reviewContent: { type: String, required: true },
    reviewRating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5
    },
    trainee: {
      type: Schema.Types.ObjectId,
      ref: 'Trainee',
      required: true
    },
    name: String
  },
  {
    timestamps: true
  }
)
module.exports = reviewSchema
