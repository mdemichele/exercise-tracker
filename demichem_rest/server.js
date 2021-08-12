// Declare dependencies
import express from 'express';
import mongoose from 'mongoose';
import { router } from './routes/routes.js';

// Declare instance of express 
const app = express();

// Connect to Database 
mongoose.connect('mongodb://localhost:27017/exercises', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.once("open", () => {
  console.log("Successfully connected to MongoDB using Mongoose!");
});

// Define Middleware 
app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

// Declare Routes 
app.use('/', router);

// Start Server 
app.listen(3000, () => {
  console.log("Server running on port 3000");
});