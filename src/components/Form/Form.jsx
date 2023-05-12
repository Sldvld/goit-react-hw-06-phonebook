import { useSelector, useDispatch } from 'react-redux';
import css from './Form.module.css';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';
import { nanoid } from 'nanoid';

export function Form() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  function handleSubmit(values, { resetForm }) {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      return Error(`${newContact.name} is already in contacts`);
    }
    dispatch(addContact(newContact));
    resetForm();
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={css.form}>
        <label htmlFor="name" className={css.formLabel}>
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Add name"
          className={css.formInput}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor="number" className={css.formLabel}>
          Number
        </label>
        <input
          type="tel"
          name="number"
          id="number"
          placeholder="Add number: "
          className={css.formInput}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <button type="submit" className={css.formButton}>
          Add contact
        </button>
      </form>
    </>
  );
}
