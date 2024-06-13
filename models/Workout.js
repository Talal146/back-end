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
    }
  },
  { timestamps: true }
)

module.exports = WorkoutSchema
