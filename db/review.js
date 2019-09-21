var mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
    body: String
})

var Review = mongoose.model('Review', reviewSchema);

module.exports = Review;