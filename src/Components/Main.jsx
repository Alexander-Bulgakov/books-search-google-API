import React from 'react';
import BooksStore from '../store/BooksStore';
import { observer } from 'mobx-react-lite';
import './Main.scss';
import Card from './Card';

// const CardsGrid = () => {
//   return(
//     <div className="main-container">
//       {BooksStore.books.map(item => (
//         <Card 
//           key={item.id}
//           categories={item.volumeInfo.categories}
//           title={item.volumeInfo.title}
//           authors={item.volumeInfo.authors}
//           image={item.volumeInfo?.imageLinks?.smallThumbnail}
//         />
//         )
//       )}
//     </div>
//   )
// }

// const NotFound = () => {
//   return(
//   <div className="main-container">
//     Books not found
//   </div>
//   )
// }

// const MainSection = () => {
//   if (BooksStore.books) {
//     return CardsGrid
//   } else {
//     return NotFound
//   }
// }

const Main = () => {
  return(
    <>
      <h3 className="search-count">Found {BooksStore.totalItems} results</h3>
      <div className="main-container">
        {BooksStore.books?.map(item => (
          <Card 
            key={item.id}
            categories={item.volumeInfo.categories[0]}
            title={item.volumeInfo.title}
            authors={item.volumeInfo.authors}
            image={item.volumeInfo?.imageLinks?.smallThumbnail}
          />
          )
        )}
      </div>
    </>
  )

}

export default observer(Main);