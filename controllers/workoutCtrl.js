const { Workout } = require('../models')
const { Review } = require('../models')
// const middleware = require('../middleware')

async function index(req, res) {
  try {
    let workouts = await Workout.find({})
    // TODO return json object with all the workouts
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

async function createReview(req, res) {
  try {
    const workout = await Workout.findById(req.params.workout_id).populate(
      'reviews'
    )
    // req.body.trainee = req.user._id
    // req.body.userName = req.user.name

    console.log(`workout ${workout}`)

    const newReview = await Review.create(req.body)
    workout.reviews.push(newReview._id)
    await workout.save()
    res.send(newReview)
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  index,
  create,
  delete: deleteWorkout,
  createReview
}
