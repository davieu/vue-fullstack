const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());

app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))