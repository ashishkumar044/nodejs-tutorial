const express = require('express');

const workoutController = require('../../controllers/workoutController')

const router = express.Router();

//Get all workouts
router.get('/', workoutController.getAllWorkouts);

//Get a particular workout (by workout id)
router.get('/:workoutId', workoutController.getWorkoutById);

//Create a new workout
router.post('/', workoutController.createNewWorkout);

//Update a workout
router.put('/:workoutId', workoutController.updateWorkout);

//Delete a workout
router.delete('/:workoutId', workoutController.deleteWorkout);


module.exports = router;