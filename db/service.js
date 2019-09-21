var mongoose = require('mongoose');

var serviceSchema = new mongoose.Schema({
    name: String,
    address: Object,
    phone: String,
    location: Object,
    votes: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Review',
            required: true,
            default: []
        }
    ]

});

var Service = mongoose.model('Service', serviceSchema);

module.exports = Service;