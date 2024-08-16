import { Contact } from '../models/contacts.js';

function getAllContacts() {
  return Contact.find();
}
function getContactById(id) {
  return Contact.findById(id);
}
function deleteContact(id) {
  return Contact.findByIdAndDelete(id);
}
function postContact(contact) {
  return Contact.create(contact);
}

function patchContact(id, contact) {
  return Contact.findByIdAndUpdate(id, contact, { new: true });
}

export {
  getAllContacts,
  getContactById,
  deleteContact,
  postContact,
  patchContact,
};
