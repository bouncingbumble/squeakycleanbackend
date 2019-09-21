var express = require('express'),
    router = express.Router(),
    { getService, getServices, upvote, downvote } = require('../apis/services'),
    { createReview } = require('../apis/reviews')

router.get('/services/:id', getService)
router.get('/services', getServices)

router.post('/services/:id/review', createReview)

router.post('/services/:id/upvote', upvote)
router.post('/services/:id/downvote', downvote)

module.exports = router;