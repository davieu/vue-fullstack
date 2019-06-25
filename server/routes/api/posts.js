const express = require('express');
const mongodb = require('mongodb');

const router = express();

// Get Posts
router.get('/', (req, res) => {
  res.send("<h1>hello</h1>");
});

// Add Post
router.get('/test', (req, res) => {
  res.send('testttt')
})

// Delete Post

module.exports = router;