var mongoose = require('mongoose');

mongoose.set('debug', true);
mongoose.connect('mongodb+srv://admin:jv3YCnRu6fnKjcc@squeakyclean-mhnkr.mongodb.net/test?retryWrites=true&w=majority');
mongoose.Promise = Promise;

module.exports.Service = require('./service')
module.exports.Review = require('./review')

