const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

const postRoutes = require('./controllers/posts');

server.use('/posts', postRoutes);

// Root route
server.get('/', (req, res) => res.send('Welcome to the Telegraph clone. Visit /posts to get more information'));

module.exports = server;