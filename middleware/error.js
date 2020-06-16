const ErrorResponse = require('../utils/errorResponse');
const logger = require('../middleware/logger');

const errorHandler = (err, req, res, next) => {
  let error = { ...err };

  error.message = err.message;

  // Logging to console to see exact error msg
  console.log(err.stack.red);

  // Mongoose bad ObjectId
  if (err.name === 'CastError') {
    const message = `Bootcamp not found with id of ${err.value}`;
    error = new ErrorResponse(message, 404);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server Error',
  });
};

module.exports = errorHandler;
