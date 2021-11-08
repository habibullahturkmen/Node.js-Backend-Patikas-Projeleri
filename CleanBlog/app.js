// Third party modules
const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const methodOverride = require('method-override');

// Controller modules
const postController = require('./controllers/postController');
const pageController = require('./controllers/pageController');


// Initialize Express
const app = express();

// Connect Database
mongoose.connect('mongodb://localhost/cleanblog-test-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Set Template Engine
app.set('view engine', 'ejs');

// Execute Middlewares
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(methodOverride('_method', {
    methods: ['POST', 'GET']
}));

// Routes: postController
app.get('/', postController.getAllPosts);
app.get('/posts/:id', postController.getPost);
app.post('/posts', postController.createPost);
app.put('/posts/:id', postController.updatePost);
app.delete('/posts/:id', postController.deletePost);

// Routes: pageController
app.get('/about', pageController.getAboutPage);
app.get('/add_post', pageController.getAddPostPage);
app.get('/post', pageController.getPostPage);
app.get('/posts/edit_post/:id', pageController.getEditPostPage);

const port = 3000;
app.listen(port, () => {
    console.log(`server started at ${port}`);
});