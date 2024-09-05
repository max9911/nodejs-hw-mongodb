import * as ContacsServices from '../services/contacts.js';
import createHttpError from 'http-errors';
import { parsePagParams } from '../utils/parsePageParams.js';
import { parseSortParams } from '../utils/parseSortParams.js';

async function getContacts(req, res, next) {
  const { page, perPage } = parsePagParams(req.query);
  const { sortBy, sortOrder } = parseSortParams(req.query);

  const data = await ContacsServices.getAllContacts(
    page,
    perPage,
    sortBy,
    sortOrder,
  );
  res.send({
    status: 200,
    message: 'Successfully found contacts!',
    data,
  });
}
async function getContactById(req, res, next) {
  const id = req.params.contactId;
  const contact = await ContacsServices.getContactById(id);

  if (contact === null) {
    return next(createHttpError(404, `Contact not found!`));
  }

  res.send({
    status: 200,
    message: `Successfully found contact with id ${id}!`,
    data: contact,
  });
}

async function deleteContactById(req, res, next) {
  const id = req.params.contactId;
  const result = await ContacsServices.deleteContact(id);

  if (result === null) {
    return next(createHttpError(404, `Contact not found!`));
  }

  res.status(204).send({ status: 204 });
}

async function postContact(req, res, next) {
  const contact = {
    name: req.body.name,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email || null,
    isFavorite: req.body.isFavorite || false,
    contactType: req.body.contactType,
  };

  const result = await ContacsServices.postContact(contact);

  res.status(201).send({
    status: 201,
    message: 'Successfully created a contact!',
    data: result,
  });
}

async function patchContact(req, res, next) {
  const id = req.params.contactId;
  const contact = req.body;

  const result = await ContacsServices.patchContact(id, contact);

  if (result === null) {
    return next(createHttpError(404, `Contact not found!`));
  }

  res.status(200).send({
    status: 200,
    message: 'Successfully patched a contact!',
    data: result,
  });
}

export {
  getContacts,
  getContactById,
  deleteContactById,
  postContact,
  patchContact,
};
