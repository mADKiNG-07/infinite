const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    },
    timeFrame: {
        type: String,
        required: true
    },
}, { timestamps: true });

const Post = mongoose.model('Post', postSchema);
module.exports = Post;