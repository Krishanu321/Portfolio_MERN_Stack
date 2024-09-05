const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// dotenv configuration
dotenv.config();

// Create an instance of express
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, './client/build')));

// Handle all other routes with index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Set the port and start the server
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
