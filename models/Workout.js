const { Schema } = require('mongoose')

const WorkoutSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    machine: {
      type: String,
      required: true
    },
    reps: {
      type: Number,
      required: true
    },
    sets: {
      type: Number,
      required: true
    },
    weight: {
      type: Number,
      required: true
    },
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }]
  },
  { timestamps: true }
)

module.exports = WorkoutSchema
