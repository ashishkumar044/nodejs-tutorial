const workoutService = require('../services/workoutService');

const getAllWorkouts = (req, res) => {
    workoutService.getAllWorkouts;
    res.send('Get all workouts');
};

const getWorkoutById = (req, res) => {
    workoutService.getWorkoutById;
    res.send('Get a workout by id');
};

const createNewWorkout = (req, res) => {
    workoutService.createNewWorkout;
    res.send('Create anew workout');
};

const updateWorkout = (req, res) => {
    workoutService.updateWorkout;
    res.send('Update a workout');
};

const deleteWorkout = (req, res) => {
    workoutService.deleteWorkout;
    res.send('Delete a workout');
};

module.exports = {
    getAllWorkouts,
    getWorkoutById,
    createNewWorkout,
    updateWorkout,
    deleteWorkout,
}