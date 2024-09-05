import express from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  getContacts,
  getContactById,
  postContact,
  patchContact,
  deleteContactById,
} from '../controllers/contacts.js';
import { validateBody } from '../middlewares/validate_body.js';
import { schema, schemaPatch } from '../validation_schema/contacts.js';
import { isValidID } from '../middlewares/isValidID.js';

const router = express.Router();
const jsonParser = express.json();

router.get('/contacts', ctrlWrapper(getContacts));
router.get('/contacts/:contactId', isValidID, ctrlWrapper(getContactById));
router.post(
  '/contacts',
  jsonParser,
  validateBody(schema),
  ctrlWrapper(postContact),
);
router.patch(
  '/contacts/:contactId',
  isValidID,
  jsonParser,
  validateBody(schemaPatch),
  ctrlWrapper(patchContact),
);
router.delete('/contacts/:contactId', ctrlWrapper(deleteContactById));

export default router;
