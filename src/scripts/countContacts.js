import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();

    return contacts.length;
  } catch (err) {
    console.error('Error counting contacts:', err);
    return 0;
  }
};

countContacts().then((count) => {
  console.log('Number of Contacts:', count);
});
