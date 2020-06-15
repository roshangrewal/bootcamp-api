const express = require('express');
const dotenv = require('dotenv');

// Load env variables
dotenv.config({ path: './config/config.env' });

// Initialize express application
const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server runnung in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
