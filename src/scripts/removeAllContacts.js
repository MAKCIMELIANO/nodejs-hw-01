import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    const emptyContacts = [];

    await writeContacts(emptyContacts);

    console.log('Successfully removed all contacts.');
  } catch (err) {
    console.error('Error removing all contacts:', err);
  }
};

removeAllContacts();
