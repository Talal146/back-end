const mongoose = require('mongoose')
const UserSchema = require('./User')
const WorkoutSchema = require('./Workout')
const PlanSchema = require('./Plan')
const ReviewSchema = require('./Review')

const User = mongoose.model('User', UserSchema)
const Workout = mongoose.model('Workout', WorkoutSchema)
const Plan = mongoose.model('Plan', PlanSchema)
const Review = mongoose.model('Review', ReviewSchema)

module.exports = {
  User,
  Workout,
  Plan,
  Review
}
