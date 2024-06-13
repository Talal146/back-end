const { Workout } = require('../models')
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
    _id: req.params.id,
    user: req.user._id
  })
  res.send({ msg: 'Post Deleted', payload: req.params.post_id, status: 'Ok' })
}

module.exports = {
  index,
  create,
  delete: deleteWorkout
}
