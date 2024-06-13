const { Review } = require('../models')
const { Workout } = require('../models')

const getReview = async (req, res) => {
  try {
    const reviews = await Review.find({})
    res.send(reviews)
  } catch (error) {
    throw error
  }
}

async function createReview(req, res) {
  try {
    const workout = await Workout.findById(req.params.id)
    req.body.user = req.user._id
    req.body.userName = req.user.name

    const review = await Review.create(req.body)
    workout.review.push(review._id)
    await workout.save()
    res.redirect(`/categories/items/show/${workout._id}`)
  } catch (err) {
    console.log(err)
  }
}

async function deleteReview(req, res) {
  try {
    const itemId = req.body.itemId
    const userId = req.user._id
    const review = await Review.findByIdAndDelete(req.params.id, { userId })
    res.redirect(`/categories/items/show/${itemId}`)
  } catch (err) {
    console.log(err)
  }
}

async function updateReview(req, res) {
  try {
    const itemId = req.body.itemId
    const updatedReview = await Review.findByIdAndUpdate(req.params.id, {
      reviewContent: req.body.reviewContent
    })
    res.redirect(`/categories/items/show/${itemId}`)
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  getReview,
  createReview,
  deleteReview,
  updateReview
}
