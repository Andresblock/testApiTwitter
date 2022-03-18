const {Schema, model} = require('mongoose');

const portfolio = new Schema({
    experience: String,
    imagePath: String,
    name: String,
    twitterUser: String,
    email: String,
    address: String,
    phone: String,
    zipCode: String,
    image_path: String,
    twitter_user: String,
    zip_code: String
},{
    timestamps: true,
    versionKey: false
})

module.exports = model('Portfolio', portfolio);