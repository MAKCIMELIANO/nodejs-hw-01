import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    return contacts;
  } catch (err) {
    console.error('Error getting all contacts:', err);
    return [];
  }
};

getAllContacts().then((contacts) => {
  console.log('All Contacts:', contacts);
});
