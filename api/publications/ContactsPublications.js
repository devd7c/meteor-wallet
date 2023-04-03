import { Meteor } from 'meteor/meteor';
import { ContactsCollection } from '../collections/ContactsCollection.js';

/* Meteor.publish('allContacts', function publishAllContacts() {
  return ContactsCollection.find();
}); */

Meteor.publish('myContacts', function publishContacts() {
  const { userId } = this;
  if (!userId) {
    throw new Meteor.Error('Access denied');
  }
  const contacts = ContactsCollection.find(
    { userId, archived: { $ne: true } },
    {
      fields: {
        createdAt: false,
      },
    }
  );
  // console.log(contacts);
  return contacts;
});
