import React from 'react';
import './App.css';
import Home from './Home/Home.react';
import Navbar from './Navbar/Navbar.react';
import Footer from './Footer/Footer.react';
import Content from './Content/Content.react'
function App() {
  return (
    <div className="App">
   
    <Content></Content>
    <Navbar></Navbar>
    <Footer></Footer>
    
    </div>
  );
}

export default App;
