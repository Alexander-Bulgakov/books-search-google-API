import axios from "axios";
import { makeAutoObservable, toJS } from "mobx";

class BooksStore {

  books = []
  baseUrl = 'https://www.googleapis.com/books/v1/volumes?q='
  key = '&key=AIzaSyDt39Xy7-W9qE7A8pwQqagkCnieyQQbIMg'
  totalItems = 0
  category = 'all'
  orderBy = 'relevance'
  loadMoreButton = false;

  constructor() {
    makeAutoObservable(this);
  }

  setCategory(item) {
    this.category = item;
    console.log('category >>> ', this.category);
  }

  setSorting(item) {
    this.orderBy = item;
    console.log('orederBy >>> ', this.orderBy);
  }

  createURL(searchText) {
    console.log('cat >>> ', this.category);
    debugger;
    return this.baseUrl + searchText + '+subject:' + this.category + '&orderBy=' + this.orderBy + this.key + '&maxResults=30';
    // return this.baseUrl + searchText + '+subject:' + this.category + this.key + '&maxResults=30'
  }

  async setBooks(searchText) {
    const url = this.createURL(searchText);
    console.log(url);
    debugger;
    const requestedBooks = await axios.get(this.baseUrl + searchText + '+subject:' + this.category + '&orderBy=' + this.orderBy + this.key + '&maxResults=30')
    // const requestedBooks = await axios.get(this.baseUrl + searchText + '+subject:' + this.category + '&orderBy=' + this.orderBy + this.key + '&maxResults=30')
      .then(res => {
        this.totalItems = res.data.totalItems;
        this.books = res.data.items;
        this.loadMoreButton = true;
      })
    console.log('requestedBooks >>> ', toJS(this.books));
    console.log('total', this.totalItems);

  }

}

export default new BooksStore();
