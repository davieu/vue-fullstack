import axios from 'axios';

// const url = 'http://localhost:5000/api/posts/';
const url = 'api/posts/';

//with static methods you don't have to instantiate the class to use the methods. new PostService not needed. 
class PostService {
  // Get Posts
  static getPosts() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url);
        const data = res.data;
        //if what we do is successful then we call resolve()
        resolve(
          data.map(post => ({
            ...post, 
            createdAt: new Date(post.createdAt)
          }))
        );
      } catch(err) {
        reject(err);
      }
    })
  }
  // Create Post
  static insertPost(text) {
    return axios.post(url, {
      text
    })
  }

  // Delete Post
  static deletePost(id) {
    return axios.delete(`${url}${id}`)
  }
}

export default PostService