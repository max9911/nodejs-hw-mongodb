import createHttpError from 'http-errors';

export function validateBody(schema) {
  return async (req, res, next) => {
    try {
      await schema.validateAsync(req.body);
      next();
    } catch (err) {
      next(
        createHttpError(404, err.details.map((err) => err.message).join(',')),
      );
    }
  };
}
