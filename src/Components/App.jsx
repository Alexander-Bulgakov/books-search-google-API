import React from 'react';
import Header from './Header';
import Main from './Main';
import './App.scss';

const App = () => {
  return(
    <div className="app-container">
      <Header />
      <Main />
    </div>
  )  
}

export default App;