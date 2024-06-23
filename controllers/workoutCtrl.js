const { Workout } = require('../models')
const { Review } = require('../models')

async function getAllWorkouts(req, res) {
  try {
    let workouts = await Workout.find({})
    res.send(workouts)
  } catch (error) {
    console.error('Error fetching workouts:', error)
  }
}

async function create(req, res) {
  try {
    const workout = new Workout(req.body)
    if (workout.name) {
      workout.name = workout.name.toUpperCase()
    }
    if (req.body.machine) {
      workout.machine = workout.machine.toUpperCase()
    }
    if (req.body.weight) {
      workout.weight = parseInt(workout.weight)
    }
    if (req.body.reps) {
      workout.reps = parseInt(workout.reps)
    }
    if (req.body.sets) {
      workout.sets = parseInt(workout.sets)
    }

    const newWorkout = await workout.save()
    console.log(`newWorkout ==> ${newWorkout}`)
    res.send(newWorkout)
  } catch (error) {
    console.error('Error creating workout', error)
  }
}

async function deleteWorkout(req, res) {
  const workout = await Workout.deleteOne({
    workout_id: req.params.id
  })
  res.send({
    msg: 'Post Deleted',
    payload: req.params.workout_id,
    status: 'Ok'
  })
}

async function updateWorkout(req, res) {
  try {
    console.log(req.body)

    const updateWorkout = await Workout.findByIdAndUpdate(
      req.params.workout_id,
      {
        title: req.body.title,
        machine: req.body.machine,
        reps: req.body.reps,
        sets: req.body.sets,
        weight: req.body.weight
      }
    )
    res.send(updateWorkout)
  } catch (err) {
    console.log(err)
  }
}

async function createReview(req, res) {
  try {
    const workout = await Workout.findById(req.params.workout_id).populate(
      'reviews'
    )
    console.log(`workout ${workout}`)

    const newReview = await Review.create(req.body)
    workout.reviews.push(newReview._id)
    await workout.save()
    res.send(newReview)
  } catch (err) {
    console.log(err)
  }
}

const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find({})
    res.send(reviews)
  } catch (error) {
    throw error
  }
}

async function updateReview(req, res) {
  try {
    console.log(req.body)

    const updatedReview = await Review.findByIdAndUpdate(req.params.review_id, {
      reviewContent: req.body.reviewContent,
      reviewRating: req.body.reviewRating
    })
    res.send(updatedReview)
  } catch (err) {
    console.log(err)
  }
}

async function deleteReview(req, res) {
  const review = await Review.deleteOne({
    review_id: req.params.id
  })
  res.send({
    msg: 'Review Deleted',
    payload: req.params.review_id,
    status: 'Ok'
  })
}

module.exports = {
  getAllWorkouts,
  create,
  delete: deleteWorkout,
  createReview,
  getAllReviews,
  updateReview,
  deleteReview,
  updateWorkout
}
