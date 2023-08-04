import React, { useState } from 'react';

export default function SearchBar({ handleSearch, users }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchClick = () => {
    handleSearch(searchQuery.trim().toLowerCase());
  };

  const handleResetClick = () => {
    setSearchQuery('');
    handleSearch('');
  };

  return (
    <div className="flex space-x-2 flex-row-reverse mx-0">
      <input
        type="text"
        placeholder="Search by name, username, or email..."
        value={searchQuery}
        onChange={handleChange}
        className="border shadow-lg  px-20 py-3 ml-2 rounded-lg"
      />
      <button onClick={handleSearchClick} className="px-4 shadow-lg py-3 bg-blue-500 text-white rounded">
      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-list-search" width="26" height="26" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <circle cx="15" cy="15" r="4" /> <path d="M18.5 18.5l2.5 2.5" /> <path d="M4 6h16" /> <path d="M4 12h4" /> <path d="M4 18h4" /> </svg>
      </button>
      <button onClick={handleResetClick} className="px-4 py-3shadow-lg  bg-red-500 text-white rounded">
        Reset
      </button>
    </div>
  );
}
