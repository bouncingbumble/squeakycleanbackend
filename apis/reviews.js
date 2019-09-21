var db = require('../db');

exports.createReview = async (req, res, next) => {
    try {
        let serviceId = req.params.id
        let foundService = await db.Service.findById(serviceId)
        let review = await db.Review.create(req.body)
        foundService.reviews.push(review)
        await foundService.save()
        res.status(201).json(review)
    } catch (err) {
        console.log(err)
    }
}

module.exports = exports