const mongoose = require('mongoose');
const moment = require('moment');
const saltRounds = 10
const jwt = require('jsonwebtoken');


const campaginSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    operatingDate: {
        type: Date,
        default: moment().format("YYYY-MM-DD")
    },
    point: {
        type: Number,
        default: 30
    },
    image: String,
    volunteerTimer: {
        type: Number,
        default: 3
    }
})

const Campagin = mongoose.model('Campagin', campaginSchema)

module.exports = { Campagin }