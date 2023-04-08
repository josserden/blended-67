import { Component } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = e => {
    const { value } = e.target;

    this.setState({ query: value });
  };

  handleFormSubmit = e => {
    e.preventDefault();

    const { query } = this.state;
    this.props.onSubmit(query);

    this.reset();
  };

  reset = () => {
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;

    return (
      <form
        className="mx-auto w-full max-w-md"
        onSubmit={this.handleFormSubmit}
        autoComplete="off"
      >
        <div className="relative">
          <button
            type="submit"
            className="absolute top-1/2 left-2.5 -translate-y-1/2"
          >
            <AiOutlineSearch className="h-6 w-6 text-gray-300" />
          </button>

          <input
            className="input w-full !pl-10"
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={this.handleChange}
          />
        </div>
      </form>
    );
  }
}
