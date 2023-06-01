const mongoose = require('mongoose');
const moment = require('moment');
const saltRounds = 10
const jwt = require('jsonwebtoken');


const campaginSchema = mongoose.Schema({
    campagin_name: {
        type: String,
        maxlength: 50
    },
    campagin_operatingDate: {
        type: Date,
        default: moment().format("YYYY-MM-DD")
    },
    campagin_point: {
        type: Number,
        default: 30
    },
    image: String,
    campagin_volunteerTimer: {
        type: Number,
        default: 3
    },
    register_user: [
        {
            register_userId: {type: String},
            register_status: {type: Boolean}
        }
    ],
})

const Campagin = mongoose.model('Campagin', campaginSchema)

module.exports = { Campagin }