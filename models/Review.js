const { Schema } = require('mongoose');

const reviewSchema = new Schema(
	{
		reviewContent: { type: String, required: true },
		reviewRating: {
			type: Number,
			min: 1,
			max: 5,
			default: 5,
		},
		user: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
		workout: {
			type: Schema.Types.ObjectId,
			ref: 'Workout',
			required: true,
		},
	},
	{
		timestamps: true,
	}
);
module.exports = reviewSchema;
