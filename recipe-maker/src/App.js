import React from 'react';
import logo from './logo.svg';
import './App.css';

import Meals from './components/Meals';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div className='search-container'>
          <Form />
        </div>
        <div className='meals-container'>
          <Meals />
        </div>
      </header>
    </div>
  );
}

export default App;
