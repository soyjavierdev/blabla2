const { Schema, model } = require("mongoose");

const ratingSchema = new Schema(
    {
        score: {
            type: Number,
            min: 1,
            max: 5,
            required: [true, 'Please include a number between 1 and 5'],
            integer: true
        },

        comment: {
            type: String,
            maxLength: [300, 'The maximum length of reviews is 300 characters'],
        },

        rated: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },

        judge: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    },

    {
        timestamps: true,
    }
);

const Rating = model("Rating", ratingSchema);

module.exports = Rating;