import { useSelector, useDispatch } from 'react-redux';
import css from './Form.module.css';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';

export function Form() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const checkingForMatches = value => {
    return contacts.some(el => el.name.toLowerCase() === value.toLowerCase());
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const {
      target: { name, number },
    } = evt;

    if (checkingForMatches(name.value)) {
      alert(`${name.value} is already in contacts`);
      return;
    }
    dispatch(addContact(name.value, number.value));
    name.value = '';
    number.value = '';
  };

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
