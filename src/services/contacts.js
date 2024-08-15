import { Contact } from '../models/contacts.js';

function getAllContacts() {
  return Contact.find();
}
function getContactById(id) {
  return Contact.findById(id);
}

export { getAllContacts, getContactById };
