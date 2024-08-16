import express from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

import {
  getContacts,
  getContactById,
  postContact,
  patchContact,
  deleteContactById,
} from '../controllers/contacts.js';

const router = express.Router();
const jsonParser = express.json();

router.get('/contacts', ctrlWrapper(getContacts));
router.get('/contacts/:contactId', ctrlWrapper(getContactById));
router.post('/contacts', jsonParser, ctrlWrapper(postContact));
router.patch('/contacts/:contactId', jsonParser, ctrlWrapper(patchContact));
router.delete('/contacts/:contactId', ctrlWrapper(deleteContactById));

export default router;
