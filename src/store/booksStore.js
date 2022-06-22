import axios from "axios";
import { makeAutoObservable, runInAction } from "mobx";

class BooksStore {

  books = [];
  baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=react&key=AIzaSyDt39Xy7-W9qE7A8pwQqagkCnieyQQbIMg'

  constructor() {
    makeAutoObservable(this);
  }

  async setBooks(q) {
    const requestedBooks = await axios.get('https://www.googleapis.com/books/v1/volumes?q=' + q + '&key=AIzaSyDt39Xy7-W9qE7A8pwQqagkCnieyQQbIMg')
      .then(res => console.log(res.data.items))
      //   runInAction(() => {
      //     this.books = res.items
      //   })
      // })
    // this.books = requestedBooks.items;
    console.log('requestedBooks >>> ', this.books);

  }

}

export default new BooksStore();
