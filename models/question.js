const mongoose = require('mongoose')


const questionSchema = new mongoose.Schema({

    questionOne: {
        type: String,
        default: ""
    },
    questionTwo: {
        type: String,
        default: ""
    },
    valueOne: {
        type: Number,
        default: 0
    },
    valueTwo: {
        type: Number,
        default: 0
    }

})




const Question = mongoose.model('Question', questionSchema)
module.exports = Question