import css from './ContactList.module.css';
import Contact from '../contact/Contact';

export default function ContactList({ items, onDelete }) {
  return (
    <ul className={css.contactList}>
      {items.map(item => (
        <Contact contact={item} key={item.id} onClick={onDelete} />
      ))}
    </ul>
  );
}
