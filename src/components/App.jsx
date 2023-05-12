import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Form } from './Form/Form';
import css from './App.module.css';

// export function App() {
//   const [contacts, setContacts] = useState(
//     () => JSON.parse(localStorage.getItem('contacts')) ?? []
//   );
//   const [filter, setFilter] = useState('');
//   const visibleContacts = contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter)
//   );

//   useEffect(() => {
//     localStorage.setItem('contacts', JSON.stringify(contacts));
//   }, [contacts]);

//   const handleSubmitForm = newContact => {
//     contacts.find(
//       contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
//     )
//       ? alert(`${contacts.name} is already in contacts`)
//       : setContacts(prevContacts => [newContact, ...prevContacts]);
//   };

//   const handleFilter = evt => {
//     setFilter(evt.currentTarget.value.toLowerCase());
//   };

//   const deleteContact = contactId => {
//     setContacts(prevContacts =>
//       prevContacts.filter(contact => contact.id !== contactId)
//     );
//   };
export function App() {
  return (
    <section>
      <h1 className={css.formTitle}>Phonebook</h1>
      <Form />
      <div className={css.filterBlock}>
        <h2 className={css.contactTitle}>Contacts</h2>
        <Filter />
      </div>
      <ContactList />
    </section>
  );
}
