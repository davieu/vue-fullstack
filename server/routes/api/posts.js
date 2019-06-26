const express = require('express');
const mongodb = require('mongodb');
const mongoAtlasKey = require('../../keys.js')


const router = express();

// Get Posts
router.get('/', async (req, res) => {
    const posts = await loadPostsCollection()
    //find({})  means return all
    res.send(await posts.find({}).toArray());
});

// Add Post
router.post('/', async (req, res) => {
  const posts = await loadPostsCollection();
  await posts.insertOne({
    text: req.body.text,
    createdAt: new Date()
  });
  res.status(201).send()
})

// Delete Post
router.delete('/:id', async (req, res) => {
  const posts = await loadPostsCollection();
  await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id)})
  res.status(200).send();
})

async function loadPostsCollection() {
  const client = await mongodb.MongoClient.connect(mongoAtlasKey, {useNewUrlParser: true})
  
  return client.db('vue-fullstack').collection('posts')
}

module.exports = router;