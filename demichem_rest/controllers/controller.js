import mongoose from 'mongoose';
import { Exercise } from '../models/exercise-model.js';

// 01. POST: Create an exercise 
export const createExercises = async (req, res, next) => {
  
  // Create a new exercise 
  let exercise = await new Exercise({ 
    name: req.body.name, 
    reps: req.body.reps, 
    weight: req.body.weight, 
    unit: req.body.unit, 
    date: req.body.date 
  });
  
  // Save the exercise 
  exercise.save();
  
  // Respond back with JSON data 
  await res.status(201).json(exercise);
  
}

// 02. GET: Retrieve exercises 
export const retrieveExercises = async (req, res, next) => {
  // Retrieve all exercises from database 
  let exercises = await Exercise.find({});
  
  // Respond back with JSON data
  await res.status(200).json(exercises);
  
}

// 03. PUT: Update exercises 
export const updateExercise = async (req, res, next) => {
  // Find the exercise to be updated 
  let exercise = await Exercise.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    reps: req.body.reps,
    weight: req.body.weight,
    unit: req.body.unit,
    date: req.body.date
  });
  // Save Changes 
  exercise.save();
  
  // Send response 
  res.status(200).json(exercise);
}

// 04. DELETE: Delete exercises 
export const deleteExercise = async (req, res, next) => {
  
  // Find the exercise to be deleted and delete 
  let exercise = await Exercise.findByIdAndDelete(req.params.id);
  
  // Send Response 
  res.status(204).send();
}