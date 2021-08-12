import mongoose from 'mongoose';

const ExerciseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }, 
  reps: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    required: true
  }, 
  unit: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
});

export const Exercise = mongoose.model('Exercise', ExerciseSchema);