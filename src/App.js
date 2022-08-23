import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Section1 from './sections/section1';
import Section2 from './sections/section2';
import Section3 from './section3';

function App() {
  return (
    <div>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </div>
  );
}

export default App;
