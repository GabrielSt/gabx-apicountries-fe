import React, { useState, useEffect } from "react";

import "./styles.scss";

const SearchField = props => {
  const { onChange, placeholder } = props;
  const [searchTerm, setSearchTerm] = useState(null);

  useEffect(() => {
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
      <div className="search-submit">
        <svg role="img" width="1em" height="1em">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="sbx-icon-search-13"
            viewBox="0 0 40 40"
            width="100%"
            height="100%"
          >
            <path
              d="M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z"
              fillRule="evenodd"
            />
          </svg>
        </svg>
      </div>
    </div>
  );
};

export default SearchField;
