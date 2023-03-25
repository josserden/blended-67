import { Component } from 'react';

import { AppLayout } from 'components/AppLayout';
import { Form } from 'components/Form';
import { Header } from 'components/Header';
import { Title } from 'components/Title';
import { Button } from 'components/Button';
import { ContactList } from './ContactList';

export class App extends Component {
  state = {
    contacts: [],
  };

  handleFormSubmit = contacts => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contacts],
    }));
  };

  handleDeleteContact = id => {
    console.log(id);

    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts } = this.state;

    return (
      <>
        <Header />

        <AppLayout>
          <div>
            <Title className="mb-10" tag="h2">
              Add contact
            </Title>
            <Form onSubmit={this.handleFormSubmit} />
          </div>

          <div>
            <Title className="mb-10" tag="h2">
              Contacts
            </Title>

            {contacts.length > 0 ? (
              <ContactList
                contacts={contacts}
                onDelete={this.handleDeleteContact}
              />
            ) : (
              <Title tag="h3">No contacts</Title>
            )}
          </div>
        </AppLayout>
      </>
    );
  }
}
