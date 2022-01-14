import mongoose from 'mongoose';

const RunSchema = new mongoose.Schema({ 
  distance: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
});

export const Run = mongoose.model('Run', RunSchema);