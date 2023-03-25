import React, { Component } from 'react';
import { AiTwotonePhone } from 'react-icons/ai';

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
        <header className="bg-white py-5 shadow-md">
          <div className="container flex items-center gap-3">
            <AiTwotonePhone className="h-10 w-10 text-indigo-600" />

            <h1 className="text-3xl font-bold text-indigo-600">Phonebook</h1>
          </div>
        </header>

        <section className="py-20">
          <div className="container">
            <form onSubmit={this.handleFormSubmit}>
              <input
                type="text"
                className="input"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />

              <input
                type="tel"
                className="input"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />

              <button
                className="text-md w-full max-w-[260px] rounded-md bg-indigo-600 px-3 py-2.5 font-bold text-white shadow-md transition-colors hover:bg-indigo-400"
                type="submit"
              >
                Add contact
              </button>
            </form>
          </div>
        </section>
      </>
    );
  }
}
