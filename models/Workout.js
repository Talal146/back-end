const { Schema } = require('mongoose')

const workoutSchema = new Schema({
  name: { type: String, required: true },
  machine: { type: String, required: true },
  weight: { type: Number, required: true },
  reps: { type: Number, required: true },
  sets: { type: Number, required: true }
})

module.exports = workoutSchema
