import React from "react";
import "./search-box.styles.css";

const SearchBox = ({ placeholder, searchInputText }) => {
  return (
    <div>
      <input
        className="search"
        type="search"
        onChange={searchInputText}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchBox;
