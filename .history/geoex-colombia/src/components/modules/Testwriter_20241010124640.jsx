import React from 'react';
import Typewriter from 'react-typewriter-effect';

function TestTypewriter() {
  return (
    <div>
      <h1>
        Conoce tus{' '}
        <span style={{ color: '#007bff' }}>
          <Typewriter
            text={['territorios', 'país', 'Colombia']}
            cursorColor="#3F3D56"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
            loop={true}
          />
        </span>
      </h1>
    </div>
  );
}

export default TestTypewriter;
