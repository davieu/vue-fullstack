<template>
<div class="container">
  <h1>Latest Posts </h1>
  <div class="create-post">
    <label for="create-post">Say Something... </label>
    <input type="text" id="create-post" v-model="text" placeholder="Craete a post">
    <button @click="createPost">Post!</button>
  </div>
  <hr>
  <p class="error" v-if="error">{{ error }}</p>
  <div class="posts-container">
    <div class="post" 
    v-for="(post, index) in posts"
    :item="post"
    :index="index"
    :key="post._id"
    > 
      <button type="button" class="delete-post-btn btn btn-primary" @click="deletePost(post._id)">X</button>
      <p class="text">{{ post.text }}</p>
      <p class="created-at">{{ `${post.createdAt.getDate()}/${post.createdAt.getMonth()}/${post.createdAt.getFullYear()}` }}</p>
    </div>
  </div>
</div>
  <!-- <p>{{posts}}</p> -->

</template>

<script>
import PostService from '../PostService'

export default {
  name: 'PostComponent',
  data() {
    return {
      posts: [],
      error: '',
      text: ''
    }
  },
  async created() {
    try {
      this.posts = await PostService.getPosts()
    } catch(err) {
      console.error(err)
      this.error = err.message;
    }
  },
  methods: {
    async createPost() {
      await PostService.insertPost(this.text);
      this.posts = await PostService.getPosts();
    },
    async deletePost(id) {
      await PostService.deletePost(id);
      this.posts = await PostService.getPosts()
    }
  },
  computed: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.container {
  max-width: 800px;
  margin: 0 auto;
}

.delete-post-btn {
  position: absolute;
  left: 92%;
}

p.error {
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding: 10px;
  margin-bottom: 15px
}

.post {
  position: relative;
  border: 1px solid #5bd658;
  background-color: #bcffb8;
  padding: 10px 10px 30px 10px;
  margin-bottom: 15px;
}

.created-at {
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 15 px 5px 15px;
  background-color: darkgreen;
  color: white;
  font-size: 15px;
}


p.text {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0;
  margin-top: 50px;
}
</style>
