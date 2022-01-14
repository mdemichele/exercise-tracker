import mongoose from 'mongoose';
import { Run } from '../models/run-model.js';

// 01. POST: Create an exercise 
export const createRun = async (req, res, next) => {

  // Create a new run 
  let run = await new Run({ 
    distance: req.body.distance, 
    date: req.body.date 
  });
  
  // Save the run 
  run.save();
  
  // Respond back with JSON data 
  await res.status(201).json(run);
  
}

// 02. GET: Retrieve runs 
export const retrieveRuns = async (req, res, next) => {
  // Retrieve all exercises from database 
  let runs = await Run.find({});
  
  // Respond back with JSON data
  await res.status(200).json(runs);
  
}

// 03. PUT: Update exercises 
export const updateRun = async (req, res, next) => {
  // Find the exercise to be updated 
  let run = await Run.findByIdAndUpdate(req.params.id, {
    distance: req.body.distance,
    date: req.body.date
  });
  // Save Changes 
  run.save();
  
  // Send response 
  res.status(200).json(run);
}

// 04. DELETE: Delete exercises 
export const deleteRun = async (req, res, next) => {
  
  // Find the exercise to be deleted and delete 
  let run = await Run.findByIdAndDelete(req.params.id);
  
  // Send Response 
  res.status(204).send();
}