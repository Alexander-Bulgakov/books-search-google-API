import React from "react";
import { observer } from "mobx-react-lite";
import BooksStore from "../store/booksStore";

const sorting = ["relevance", "newest"];

const handleChange = (event) => {
  BooksStore.setSorting(event.target.value);
};

const SortingSelect = () => {
  return (
    <div className="select-wrapper">
      <label htmlFor="sorting-select">Sorting by</label>
      <select className="select" id="sorting-select" onChange={handleChange}>
        {sorting.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default observer(SortingSelect);
