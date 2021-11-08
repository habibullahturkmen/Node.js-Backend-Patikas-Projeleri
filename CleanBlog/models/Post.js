const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const PostSchema = new Schema({
    title: String,
    detail: String,
    dateCreated: {
        type: Date,
        default: Date.now
    }
});

// Create model
const Post = mongoose.model('Post', PostSchema);

// Export module
module.exports = Post;
