const express = require('express');
const personController = require('./controllers/personController');

const app = express();
app.use(express.json());
app=.
// Include the Person routes
app.use('/api', personController);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
