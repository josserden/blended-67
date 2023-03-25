import React from 'react';
import { AiTwotonePhone } from 'react-icons/ai';

export const Header = () => {
  return (
    <header className="bg-white py-5 shadow-md">
      <div className="container flex items-center gap-3">
        <AiTwotonePhone className="h-10 w-10 text-indigo-600" />

        <h1 className="text-3xl font-bold text-indigo-600">Phonebook</h1>
      </div>
    </header>
  );
};
