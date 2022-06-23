import React from 'react';

const categories = [
  'all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry'
]

const CategoriesSelect = () => {
  return(
    <div>
      <label htmlFor="categories-select">Categories
      </label>
      <select className="select" id="categories-select">
        {
          categories.map(category => (
            <option 
              key={category}
              value={category} 
              //перенести в store дефолтное value
              defaultValue={() => category === 'all'}
              >{category}</option>
          ))
        }
      </select>
    </div>
  )
}

export default CategoriesSelect;