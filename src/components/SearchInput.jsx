import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import searchIcon from "../images/icons8-search.svg";
import BooksStore from "../store/booksStore";
import "./SearchInput.scss";

const SearchInput = observer(() => {
  const [search, setSearch] = useState("");

  const refreshStoreData = () => {
    BooksStore.setLoader(true);
    BooksStore.books = [];
    BooksStore.startIndex = 0;
  };

  const handleSearch = () => {
    refreshStoreData();
    BooksStore.setSearchText(search);
    BooksStore.getBooksFromAPI();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="input">
      <input
        type="text"
        className="input__field"
        onChange={(event) => setSearch(event.target.value)}
        onKeyDown={handleKeyDown}
        value={search}
      />
      <img
        src={searchIcon}
        alt="search"
        className="input__icon"
        onClick={handleSearch}
      />
    </div>
  );
});

export default SearchInput;
