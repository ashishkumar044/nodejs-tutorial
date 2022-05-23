const workout = require('../database/workout');

const getAllWorkouts = () => {
    console.log('Get all workouts service');
    const allWorkouts = workout.getAllWorkouts();
    return allWorkouts;
};

const getWorkoutById = () => {
    console.log('Get a single workout service');
    return;
};

const createNewWorkout = () => {
    console.log('Create new workout service');
    return;
};

const updateWorkout = () => {
    console.log('Update new workout service');
    return;
};

const deleteWorkout = () => {
    console.log('Delete workout service');
    return;
};

module.exports = {
    getAllWorkouts,
    getWorkoutById,
    createNewWorkout,
    updateWorkout,
    deleteWorkout,
};