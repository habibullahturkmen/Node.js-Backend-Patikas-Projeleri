const Post = require('../models/Post');

// renders About page
exports.getAboutPage = (req, res) => {
    res.render('about');
};

// renders Add Post page
exports.getAddPostPage = (req, res) => {
    res.render('add_post');
};

// renders Individual Post page
exports.getPostPage = async (req, res) => {
    res.render('post');
};

// renders Edit Post page
exports.getEditPostPage = async (req, res) => {
    const post = await Post.findOne({_id: req.params.id});
    res.render('edit_post', {
        post:post
    });
};