import React from 'react';
import Navbar from './components/navbar';
import Browse from './components/browse';
import Register from './components/register';
import Login from './components/login';


function App(props) {
  return (
    <div>
      <Navbar />
      <Login />
      <Browse />
    </div>
  );
}

export default App;
