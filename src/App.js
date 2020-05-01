import React from 'react';
import Navbar from './components/navbar';
import Category from './components/browse';
// import './App.css';

function App(props) {
  return (
    <div className='container'>
      <Navbar />
      <Category />
    </div>
  );
}

export default App;
