var db = require('../db');

exports.createReview = async (req, res, next) => {
    console.log(req.body)
    try {
        let serviceId = req.params.id
        let foundService = await db.Service.findById(serviceId)
        let review = await db.Review.create({ body: req.body.review })
        foundService.reviews.push(review)
        await foundService.save()
        res.status(201).json(review)
    } catch (err) {
        console.log(err)
    }
}

module.exports = exports