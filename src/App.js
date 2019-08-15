import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TopBar from './components/TopBar';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <TopBar/>
      <Header/>
      <About/>
      <Resume/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
