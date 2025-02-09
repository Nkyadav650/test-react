import React, { useState } from "react";
// import "./searchbar.css"; // Import external CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export const Dropdown = ({ options = [], onOption, className = "" }) => {
  const [optionValue, setOptionVale] = useState("");
  const handleChangeOption = (e) => {
    const selectedValue = e.target.value;
    setOptionVale(selectedValue);
    // Call onOption immediately with the new value
    if (onOption) {
      onOption(selectedValue);
    }
  };

  return (
    <select className={`custom-dropdown ${className}`} onChange={handleChangeOption} value={optionValue}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

const SearchBar = ({ placeholder = "Search...", onSearch, className = "", leftOptions = [], rightOptions = [] }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query);
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    
     
      <div className="search-bar-input-wrapper">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          placeholder={placeholder}
          className="search-bar-input"
        />
        <button 
          onClick={handleSearch} 
          className="search-bar-button"
        >
             <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
      
   
  );
};

export default SearchBar;
