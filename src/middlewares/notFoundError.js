import createHttpError from 'http-errors';

function notFoundError(req, res, next) {
  const err = createHttpError(404, 'Route not found');
  res.status(err.status).send(err.message);
}
export { notFoundError };
