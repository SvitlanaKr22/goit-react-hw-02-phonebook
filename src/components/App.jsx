import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const INITIALE_STATE = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

export class App extends Component {
  state = { ...INITIALE_STATE };

  addContact = newContact => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
    // посмотреть позже
    // this.setState(prevState => {
    //   return prevState.contacts.push(newContact);
    // });
  };

  searchContact = evt => {
    // const { name, value } = evt.target;
    // this.setState({ [name]: value });
    this.setState({ filter: evt.currentTarget.value });
    console.log(evt.currentTarget.value);
  };

  handleDeleteContact = contactId => {
    console.log(contactId);
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          // display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
          fontSize: 24,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm onSave={this.addContact} />

        <h2>Contacts</h2>
        <Filter onSearch={this.searchContact} value={this.filter} />
        <ContactList
          list={this.state.contacts}
          handleDelete={this.handleDeleteContact}
        />
      </div>
    );
  }
}
