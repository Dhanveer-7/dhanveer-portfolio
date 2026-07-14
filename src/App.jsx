import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import CaseStudies from './components/CaseStudies';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <CaseStudies />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
