import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import PropTypes from 'prop-types';

export const SearchbarHook = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    const { value } = e.target;

    setQuery(value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    onSubmit(query);
    setQuery('');
  };

  return (
    <form
      className="mx-auto w-full max-w-md"
      onSubmit={handleFormSubmit}
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
          className="input w-full !pl-10 !shadow-md"
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

SearchbarHook.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
