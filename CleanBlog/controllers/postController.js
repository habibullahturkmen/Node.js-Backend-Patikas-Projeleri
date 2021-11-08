const Post = require('../models/Post');

// reads all posts
exports.getAllPosts = async (req, res) => {
    const posts = await Post.find({});
    res.render('index', {
        posts:posts
    });
};

// reads an individual post
exports.getPost = async (req, res) => {
    const posts = await Post.findById(req.params.id);
    res.render('post', {
        posts:posts,
    });
};

// creates post
exports.createPost = async (req, res) => {
    await Post.create(req.body);
    res.redirect('/');
};

// updates post
exports.updatePost = async (req, res) => {
    const post = await Post.findOne({ _id: req.params.id });
    post.title = req.body.title;
    post.detail = req.body.detail;
    post.save();
    res.redirect(`/posts/${req.params.id}`);
};

// deletes post
exports.deletePost = async (req, res) => {
    await Post.findByIdAndRemove(req.params.id);
    res.redirect('/');
};