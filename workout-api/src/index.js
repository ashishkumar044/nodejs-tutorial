const express = require('express');

const v1Router = require('./v1/routes/workoutRoutes');
const v2Router = require('./v2/routes')

const app = express();

const PORT = process.env.PORT || 4000;

app.use('/api/v1', v1Router);
app.use('/api/v2', v2Router);

app.listen(PORT, () => {
  console.log(`API is listening on ${PORT}`);
});