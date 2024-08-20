import { isHttpError } from 'http-errors';

function errorHandler(err, req, res, next) {
  if (isHttpError(err) === true) {
    return res
      .status(err.status)
      .send({ status: err.status, message: err.message });
  }

  res
    .status(500)
    .send({ message: 'Something went wrong', status: 500, data: err.message });
}

export { errorHandler };
