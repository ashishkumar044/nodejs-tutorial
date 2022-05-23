const database = require('./db.json');

const getAllWorkouts = () => {
    return database.workouts;
};

module.exports = {
    getAllWorkouts
}