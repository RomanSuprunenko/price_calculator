const mongoose = require('../mongoose');
const timestamps = require('mongoose-timestamp');

const schema = new mongoose.Schema({
    weight : {
        type: String,
        required: true,
    },
    cut: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    clarity: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }
});

schema.statics = {
    findDiamond(condition) {
        return this.findOne(condition);
    }
};

schema.plugin(timestamps);

module.exports = mongoose.model('diamond', schema);
