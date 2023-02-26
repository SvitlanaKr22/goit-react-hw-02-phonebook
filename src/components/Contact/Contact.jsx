import { ContactItem, Button } from './Contact.styled';

export default function Contact({ name, number, onClickDelete }) {
  return (
    <ContactItem>
      <p>{name + ': '}</p>
      <p>{number}</p>
      <Button type="button" onClick={onClickDelete}>
        Delete
      </Button>
    </ContactItem>
  );
}
