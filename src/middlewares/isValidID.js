import { isValidObjectId } from 'mongoose';
import createHttpError from 'http-errors';

export function isValidID(req, res, next) {
  const { contactId } = req.params;
  console.log(contactId);
  if (isValidObjectId(contactId) === false) {
    next(createHttpError(400, 'Invalid contact ID!'));
  }

  next();
}
