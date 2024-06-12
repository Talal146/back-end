const { Schema } = require('mongoose')

const planSchema = new Schema({
  Day1: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Workout'
    }
  ],
  Day2: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Workout'
    }
  ],
  Day3: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Workout'
    }
  ],
  Day4: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Workout'
    }
  ],
  Day5: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Workout'
    }
  ],
  Day6: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Workout'
    }
  ],
  Day7: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Workout'
    }
  ]
})

module.exports = planSchema
