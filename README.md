# vue-fullstack
vue with node express. Kind of like a todo. 

https://fullstack-vue-posts.herokuapp.com/
https://fullstack-vue-posts.herokuapp.com/api/posts ----- for looking at the api

git clone the repo and don't forget to npm install. You will need to npm install on the root directory(fullstack-vue folder). Also npm install in the client folder. 

To run dev server - npm run dev
to run client-vue - npm run serve

//PUBLIC folder is the built folder for deploying
to build client for deployment you must go into the client folder from the cmd and put npm run build. Note I added a vue.config.js file to configure where the built folder is sent. It is sent to the server folder and is called 'public'. Also in the vue.config there is a proxy for the /api for localhost:5000.

type in something. Then hit post button.
double click to delete a post.


//If you want to use your own mongoDB.Atlas then change the mongoAtlasKey variable to the string that Atlas gives you.

async function loadPostsCollection() {                HERE
  const client = await mongodb.MongoClient.connect(mongoAtlasKey, {useNewUrlParser: true})
  
  return client.db('vue-fullstack').collection('posts')
}