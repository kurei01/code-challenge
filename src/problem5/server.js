// import dependencies
import "dotenv/config";

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import logger from 'morgan';

import mainRoutes from './server/routes/main.js'

// set up dependencies
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));

// set up mongoose
mongoose.connect(process.env.MONGO_DB)
  .then(()=> {
    console.log('Database connected');
  })
  .catch((error)=> {
    console.log(error);
    console.log('Error connecting to database');
  });
// set up port
const port = 5035;
// set up route
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to Project Support',
  });
});
app.listen(port, () => {
  console.log(`Our server is running on port ${port}`);
});

// set up route
app.use('/api/', mainRoutes);