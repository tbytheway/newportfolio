import React from 'react';
import './App.css';
import Home from './components/home'
import About from './components/about'
import Menu from './components/menu'

function App() {
  return (
    <div className="App">
      <Home />
      <Menu />
      <About />
    </div>
  );
}

export default App;
