import React from 'react';
import './App.css';
import Home from './components/home'
import About from './components/about'
import Menu from './components/menu'
import Contact from './components/contact'

function App() {
  return (
    <div className="App">
      <Home />
      <Menu />
      <About />
      <Contact />
    </div>
  );
}

export default App;
