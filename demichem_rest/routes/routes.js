import express from 'express';
import * as controller from '../controllers/controller.js';

export const router = express.Router();

// POST route 
router.post("/run", controller.createRun);

// GET route 
router.get("/runs", controller.retrieveRuns);

// PUT route 
router.put("/runs/:id", controller.updateRun);

// DELETE route 
router.delete("/runs/:id", controller.deleteRun);