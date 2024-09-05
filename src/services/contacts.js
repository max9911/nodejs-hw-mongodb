import { Contact } from '../models/contacts.js';

async function getAllContacts(page, perPage, sortBy, sortOrder) {
  const skip = page > 0 ? (page - 1) * perPage : 0;
  const limit = perPage;
  const allContacts = Contact.find();
  const totalItems = await Contact.countDocuments(allContacts);
  const totalPages = Math.ceil(totalItems / perPage);
  const hasPreviousPage = page > 1 && page <= totalPages;
  const hasNextPage = page < totalPages;
  console.log('fgfgfgfgfgf', sortBy, sortOrder);
  const result = await Contact.find()
    .sort([[sortBy, sortOrder]])
    .skip(skip)
    .limit(limit);

  const data = {
    data: result,
    page,
    perPage,
    totalItems,
    totalPages,
    hasPreviousPage,
    hasNextPage,
  };

  return data;
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
