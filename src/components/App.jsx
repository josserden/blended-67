import { Component } from 'react';

import { AppLayout } from 'components/AppLayout';
import { Form } from 'components/Form';
import { Header } from 'components/Header';
import { Title } from 'components/Title';

export class App extends Component {
  state = {
    contacts: [],
  };

  handleFormSubmit = contacts => {
    console.log('Form submitted');
    console.log(contacts);

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contacts],
    }));
  };

  render() {
    return (
      <>
        <Header />

        <AppLayout>
          <div className="wrapper">
            <Title tag="h2">Add contact</Title>
            <Form onSubmit={this.handleFormSubmit} />
          </div>

          <div className="wrapper">
            <Title tag="h2">Contacts</Title>
            <ul>
              {this.state.contacts.map(contact => (
                <li key={contact.id}>{contact.name}</li>
              ))}
            </ul>
          </div>
        </AppLayout>
      </>
    );
  }
}
