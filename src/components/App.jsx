import { GlobalStyle } from '../global-style';
import { Component } from "react";
import { AddContact } from './newContact/NewContact';
import { Filter } from './filter/Filter';
import { ContactList } from './contactList/ContactList';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

createContact = values => {
    const targetContact = this.state.contacts
      .map((cont) => cont.name)
      .includes(values.name);

    if (targetContact) {
      alert(`${values.name} is already in contacts`);
    } else {
      values.id = nanoid();
      this.setState(prevState => {
        return {
          contacts: [...prevState.contacts, values],
        };
      });
  };
};

changeFilter = searchValue => {
  this.setState({filter: `${searchValue.target.value}`});
}

handleDelete = contactId => {
  this.setState(prevState => {
    return {
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    };
  });
};

  render() {
    const { contacts, filter } = this.state;
    const actualContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
    return (
    <>
      <GlobalStyle />
      <h1>Contacts</h1>
      <AddContact create={this.createContact} />
      <div>
        <h2>Contacts</h2>
        <Filter onFilter={this.changeFilter}/>
        <ContactList actual={actualContacts} onDelete={this.handleDelete}/>
      </div>
    </>
  );
  };
};
