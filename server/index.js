const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Middleware
app.use(cors());

app.use('/api/posts', require('./routes/api/posts'));

// Handle production
//process.env.NODE_ENV === 'production' checks to see if in production. As soon as you are deployed to heroku it is set to true
if(process.env.NODE_ENV === 'production') {
  // Static folder
  app.use(express.static(__dirname + '/public/'))
  // Handle SPA single page application
  //for any routes /.*/ send to built file public/index.html
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'))
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))