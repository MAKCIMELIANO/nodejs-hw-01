import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();

    if (contacts.length > 0) {
      contacts.pop();

      await writeContacts(contacts);

      console.log('Successfully removed the last contact.');
    } else {
      console.log('No contacts to remove.');
    }
  } catch (err) {
    console.error('Error removing the last contact:', err);
  }
};

removeLastContact();
