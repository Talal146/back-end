const mongoose = require('mongoose')
const TraineeSchema = require('./User')
const TrainerSchema = require('./Trainer')
const WorkoutSchema = require('./Workout')
const PlanSchema = require('./Plan')
const ReviewSchema = require('./Review')

const Trainee = mongoose.model('Trainee', TraineeSchema)
const Trainer = mongoose.model('Trainer', TrainerSchema)
const Workout = mongoose.model('Workout', WorkoutSchema)
const Plan = mongoose.model('Plan', PlanSchema)
const Review = mongoose.model('Review', ReviewSchema)

module.exports = {
  Trainer,
  Trainee,
  Workout,
  Plan,
  Review
}
