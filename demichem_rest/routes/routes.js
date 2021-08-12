import express from 'express';
import * as controller from '../controllers/controller.js';

export const router = express.Router();

// POST route 
router.post("/exercises", controller.createExercises);

// GET route 
router.get("/exercises", controller.retrieveExercises);

// PUT route 
router.put("/exercises/:id", controller.updateExercise);

// DELETE route 
router.delete("/exercises/:id", controller.deleteExercise);