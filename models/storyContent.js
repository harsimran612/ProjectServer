const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const storySchema = new Schema({
    caption: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    // userId: {
    //     type: String,
    //     required: true
    // },
    image: {
        type: Object,
        required: true
    },
    tags: { type:String },
    likes: {
        type: Number,
        default: 0
    },
    postDate: { type: Date, default: new Date() },
});

const Story =  mongoose.model("Story", storySchema);

module.exports = Story;