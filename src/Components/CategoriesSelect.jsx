import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import BooksStore from '../store/BooksStore';

const categories = ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry'];

const CategoriesSelect = () => {

  const [selected, setSelected] = useState();

  const handleSelect = (event) => {
    setSelected(event.target.value);
    BooksStore.setCategory(event.target.value)
  }

  return(
    <div>
      <label htmlFor="categories-select">Categories
      </label>
      <select
        className="select"
        id="categories-select"
        value={selected}
        onChange={handleSelect}>
        {
          categories.map(category => (
            <option key={category}>{category}</option>
          ))
        }
      </select>
    </div>
  )
}

export default observer(CategoriesSelect);