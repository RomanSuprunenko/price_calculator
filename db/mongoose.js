const Promise = require('bluebird');
const mongoose = require('mongoose');
const config = require('config');

const MONGODB_URI = config.get('db.mongodb.uri');
mongoose.Promise = Promise;

if (process.env.NODE_ENV === 'production') {
    // const ca = [new Buffer(config.get('db.mongodb.ca_certificate_base64'), 'base64')];
    // mongo.connect(MONGODB_URI, { mongos: { ssl: true, sslValidate: true, sslCA: ca }, useMongoClient: true });
    mongoose.connect(MONGODB_URI, {useMongoClient: true});
} else {
    mongoose.connect(MONGODB_URI, {useMongoClient: true});
}

module.exports = mongoose;
