import React from "react";

const sorting = ['relevance', 'newest'];

const SortingSelect = () => {
  return(
    <div>
      <label htmlFor="sorting-select">Sorting by</label>
        <select 
          className="select" 
          id="sorting-select"
          >
          {
            sorting.map(item => (
              <option 
                key={item}
                value={item} 
                >{item}</option>
            ))
          }
        </select>
    </div>
  )
}

export default SortingSelect;