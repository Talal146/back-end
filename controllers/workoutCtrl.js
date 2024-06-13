const { Workout } = require('../models/Workout')
const middleware = require('../middleware')

async function index(req, res) {
  try {
    let workouts = await Workout.find({}).res.render('workouts/index', {
      title: 'All Workouts',
      workouts
    })
  } catch (error) {
    console.error('Error fetching workouts:', error)
  }
}

function newWorkout(req, res) {
  res.render('workouts/new', { title: 'Add Workout', errorMsg: '' })
}

async function create(req, res) {
  try {
    const workout = new Workout(req.body)
    if (workout.name) {
      workout.name = workout.name.toUpperCase()
    }
    if (req.body.machine) {
      workout.machine = workout.machine.toString()
    }
    if (req.body.weight) {
      workout.weight = workout.weight.parsInt()
    }
    if (req.body.reps) {
      workout.reps = workout.reps.parsInt()
    }
    if (req.body.sets) {
      workout.sets = workout.sets.parsInt()
    }

    const newWorkout = await workout.save()
    console.log(newWorkout)
    res.redirect(`/workouts/${newWorkout._id}`)
  } catch (error) {
    console.error('Error creating workout', error)
  }
}

async function deleteWorkout(req, res) {
  const workout = await Workout.deleteOne({
    _id: req.params.id,
    user: req.user._id
  })

  res.redirect('/workouts')
}

module.exports = {
  index,
  new: newWorkout,
  create,
  delete: deleteWorkout
}
