import React, { useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { TbWorldSearch } from "react-icons/tb";

const Header = ({ onSearch }) => {
  const [search , setSearch] = useState('');

  const handleSearch = () => {
    onSearch(search);
  };
console.log(search);
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center p-4 sm:px-20 bg-white/10 backdrop-blur-md shadow-md fixed w-full top-0 z-10 border-b border-white/20 text-white">
      <h1 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-0 italic font-serif">Weather App</h1>

      <div className="flex items-center bg-white/20 backdrop-blur rounded-2xl px-3 py-1 shadow-md w-full sm:w-auto">
        <input
          type="text"
          placeholder="Search city..."
          className="outline-none px-2 py-1 w-full sm:w-40 bg-transparent text-white placeholder-white"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button onClick={handleSearch} className="cursor-pointer text-green-50 hover:text-blue-300 font-sans">
          <TbWorldSearch />
        </button>
      </div>
    </div>
  );
};

export default Header;
