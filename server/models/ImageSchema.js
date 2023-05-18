const mongoose = require('mongoose');
const moment = require('moment');
const saltRounds = 10
const jwt = require('jsonwebtoken');


const ImageSchema = mongoose.Schema({
    name : {
        type: String,
    },
    image: {
        data:Buffer,
        contentType: String
    }
})


module.exports = ImageModel = mongoose.model('imageModel', ImageSchema)