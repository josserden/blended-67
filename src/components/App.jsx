import { Component } from 'react';

import { Header } from 'components/Header';
import { AppLayout } from 'components/AppLayout';
import { Button } from 'components/Button';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleFormSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <>
        <Header />

        <AppLayout>
          <form onSubmit={this.handleFormSubmit}>
            <div className="mb-10 grid gap-5">
              <label className="grid gap-2.5">
                <span className="font-bold text-indigo-800">Name</span>
                <input
                  type="text"
                  className="input"
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                />
              </label>

              <label className="grid gap-2.5">
                <span className="font-bold text-indigo-800">Number</span>
                <input
                  type="tel"
                  className="input"
                  name="number"
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                />
              </label>
            </div>

            <Button type="button">Add contact</Button>
          </form>
        </AppLayout>
      </>
    );
  }
}
