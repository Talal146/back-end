const { Review } = require('../models')

const getReview = async (req, res) => {
  try {
    const reviews = await Review.find({})
    res.send(reviews)
  } catch (error) {
    throw error
  }
}

async function deleteReview(req, res) {
  try {
    const itemId = req.body.itemId
    const userId = req.user._id
    const review = await Review.findByIdAndDelete(req.params.id, { userId })
    res.send({
      msg: 'Review Deleted',
      payload: req.params.review_id,
      status: 'Ok'
    })
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
    res.send(updateReview)
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  getReview,
  deleteReview,
  updateReview
}
