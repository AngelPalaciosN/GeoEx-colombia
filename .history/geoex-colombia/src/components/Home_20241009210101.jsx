// src/components/Home/Home.js
import React from 'react';
import Header from './sections/Header';
import MapSection from './sections/MapSection';
import QuizSection from './sections/QuizSection';
import Footer from './sections/Footer';
import './Home.scss';

function Home() {
  return (
    <div className="home">
      <Header />
      <MapSection />
      <QuizSection />
      <Footer />
    </div>
  );
}

export default Home;
