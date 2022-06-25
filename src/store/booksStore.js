import axios from "axios";
import { makeAutoObservable, toJS } from "mobx";

class BooksStore {

  books = []
  loadMoreButton = false;

  // URL parameters
  baseUrl = 'https://www.googleapis.com/books/v1/volumes?q='
  searchText = ''
  totalItems = 0
  category = 'all'
  orderBy = 'relevance'
  startIndex = 0
  key = '&key=AIzaSyDt39Xy7-W9qE7A8pwQqagkCnieyQQbIMg'

  constructor() {
    makeAutoObservable(this);
  }

  setSearchText(text) {
    this.searchText = text;
  }

  setCategory(item) {
    this.category = item;
    console.log('category >>> ', this.category);
  }

  setSorting(item) {
    this.orderBy = item;
    console.log('orederBy >>> ', this.orderBy);
  }

  createURL() {
    return  this.baseUrl + 
            this.searchText + 
            (this.category === 'all' ? '' : '&subject:' + this.category) + 
            '&startIndex=' + this.startIndex +
            '&orderBy=' + this.orderBy + 
            this.key + 
            '&maxResults=30';
  }

  async getBooksFromAPI() {
    const url = this.createURL();
    console.log(url);
    const requestedBooks = await axios.get(url)
      .then(res => {
        this.totalItems = res.data.totalItems;
        this.books = [...this.books, ...res.data.items];
        this.loadMoreButton = true;
        this.startIndex += 30;
      })
      .catch(err => console.log(err));
    console.log('requestedBooks >>> ', toJS(this.books));
    console.log('total', this.totalItems);
  }
}

export default new BooksStore();
