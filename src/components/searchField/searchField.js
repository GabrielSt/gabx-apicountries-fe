import React, { useState, useEffect } from "react";

import "./styles.scss";

const SearchField = props => {
  const { onChange, placeholder } = props;
  const [searchTerm, setSearchTerm] = useState(null);

  useEffect(() => {
    console.log("effect term", searchTerm);
    if (searchTerm !== null) onChange(searchTerm);
    // eslint-disable-next-line
  }, [searchTerm]);
  const updateSearch = e => {
    const term = e.target.value;
    setSearchTerm(term);
  };
  return (
    <div className="search-wrapper">
      <input
        name="search"
        type="search"
        value={searchTerm}
        placeholder={placeholder}
        className="search-input"
        onChange={updateSearch}
        autoComplete="off"
        aria-label="Search for a country"
      />
    </div>
  );
};

export default SearchField;
