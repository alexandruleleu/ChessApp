const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountModel = new Schema({
    email: {
        type: String,
        required: true,
        default: 1,
    },
    password: {
        type: String,
        required: true
    },
    type: {
        type: Number,
        required: true,
        default: 0 //  Options: 0 = manager or  1 = bettor
    },
    money:{
        type: Number,
        default: 0
    },
    join_date: {
        type: Date,
        required: true,
        default: new Date().getTime()
    }
});

module.exports = mongoose.model('accountModel', accountModel);
