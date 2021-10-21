const Post = require('../models/post');

// Index function - returns all posts
async function index(req, res) {
    try {
        const allPosts = await Post.all;
        res.status(200).json({ posts: allPosts });
    } catch (err) {
        res.status(500).json({ err });
    };
};

// Show function - returns one post by id
async function show(req, res) {
    try {
        const post = await Post.findById(parseInt(req.params.id));
        res.status(200).json(post);
    } catch (err) {
        res.status(404).json({ err });
    };
};

// Create function - returns newly created book
async function create(req, res) {
    try {
        const post = await Post.createPost(req.body);
        res.status(201).json(post);
    } catch (err) {
        res.status(422).json({ err });
    };
};

module.exports = { index, show, create };