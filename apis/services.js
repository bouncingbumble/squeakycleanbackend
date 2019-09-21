var db = require('../db');

exports.getServices = async (req, res, next) => {
    let services = await db.Service.find().populate('reviews')
    res.status(200).json(services)
}

exports.upvote = async (req, res, next) => {
    let serviceId = req.params.id
    try {
        let foundService = await db.Service.findById(serviceId)
        foundService.votes += 1
        await foundService.save()
        res.status(200).json(foundService)
    } catch (err) {
        console.log(err)
    }

}

exports.downvote = async (req, res, next) => {
    try {
        let serviceId = req.params.id
        let foundService = await db.Service.findById(serviceId)
        foundService.votes -= 1
        await foundService.save()
        res.status(200).json(foundService)
    } catch (err) {
        console.log(err)
    }

}


module.exports = exports