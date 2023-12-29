const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/routes');
const bodyParser = require('body-parser');

const app = express();

dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI;

const a = mongoose.connect(MONGODB_URI, 
  { useNewUrlParser: true, useUnifiedTopology: true});
if(a){
  // main();
}

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use(routes);
// app.use('/api/auth', registerRoute);
// app.use('/api/books', bookRoutes);

// Start server
app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
