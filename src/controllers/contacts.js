import * as ContacsServices from '../services/contacts.js';

async function getContacts(req, res) {
  const contacts = await ContacsServices.getAllContacts();
  res.send({
    status: 200,
    message: 'Successfully found contacts!',
    data: contacts,
  });
}
async function getContactById(req, res) {
  const id = req.params.contactId;
  const contact = await ContacsServices.getContactById(id);

  if (contact === null) {
    return res.status(404).send({
      status: 404,
      message: `Contact not found!`,
    });
  }

  res.send({
    status: 200,
    message: `Successfully found contact with id ${id}!`,
    data: contact,
  });
}

export { getContacts, getContactById };
