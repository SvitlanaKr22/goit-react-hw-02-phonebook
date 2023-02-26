import Contact from 'components/Contact/Contact';
import { List } from './ContactList.styled';

export default function ContactList({ list, handleDelete }) {
  return (
    <List>
      {list.map(({ id, name, number }) => (
        <Contact
          key={id}
          name={name}
          number={number}
          onClickDelete={() => handleDelete(id)}
        ></Contact>
      ))}
    </List>
  );
}
