import React from 'react';
import Header from './sections/Header';

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
