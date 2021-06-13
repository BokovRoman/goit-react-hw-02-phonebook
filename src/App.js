import React, { Component } from 'react';
import shortid from 'shortid';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import Section from "./components/Section/Section";


class App extends Component {

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  
  // addContact = (name, number) => {
  //   const newContact = {
  //     id: shortid.generate(),
  //     name,
  //     number,
  //   };
  // };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

   visibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
   };
  
  deleteContact = (contactId) => {
       this.setState(({ contacts }) => ({
      contacts: contacts.filter((contact) => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts } = this.state;
    const { filter } = this.state;

    return (
        <div>
          <Section title="Phonebook">
              {/* <ContactForm onSubmit={this.addContact} /> */}
          </Section>
              <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              />
              <button>Add contact</button>
          <Section title="Contacts">
            <Filter value={filter} onChange={this.changeFilter} />
            <ContactList
              contacts={this.visibleContacts()}
              onDeleteContact={this.deleteContact}
          />
          </Section>
        </div>
        );
    }
}

export default App;
