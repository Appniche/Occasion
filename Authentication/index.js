const express = require('express');
const app = express();
const port = 3000;

// Importing route files
const authUiRouter = require('./routes/frontend');
const authApiRouter = require('./routes/backend');

// Using route file
app.use('/', authUiRouter);
app.use('/api/v1/', authApiRouter);

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
