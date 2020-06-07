import React from 'react';

import './App.css';
import Home from'./containers/Home';
import Header from'./components/Header';
// import Card from './components/UI/Card';

function App() {
  return (
    <div className="App">
      <Header/>
    <Home/>
    {/* <Card/> */}
    </div>
  );
}

export default App;
