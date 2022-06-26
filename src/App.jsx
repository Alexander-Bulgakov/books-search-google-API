import React from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
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