const { StatusCodes } = require('http-status-codes');

const errorHandlingMiddleware = (err, req, res, next) => {
  console.error(err);
  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ error: 'Server error' });
};

module.exports = errorHandlingMiddleware;
