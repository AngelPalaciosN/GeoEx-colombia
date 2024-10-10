import React from 'react';
import '../../scss/header.scss';

function Header() {
  return (
    <header id='con' className="bg-white shadow" style={{ fontFamily: "'Roboto', sans-serif" }}>
      <div className="container py-4">
        <div className="row justify-content-center align-items-center">
          <div className="col-auto d-flex align-items-center">
            <div className="rounded-circle d-flex justify-content-center align-items-center" style={{ width: '64px', height: '64px', backgroundColor: '#FCD116' }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#003893"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ width: '40px', height: '40px' }}
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <span className="h2 mb-0 ms-3 fw-bold text-primary" style={{ letterSpacing: '0.5px' }}>Geoex</span>
          </div>
        </div>
      </div>
      <div className="d-flex" style={{ height: '8px' }}>
        <div className="w-50" style={{ backgroundColor: '#FCD116' }}></div>
        <div className="w-25" style={{ backgroundColor: '#003893' }}></div>
        <div className="w-25" style={{ backgroundColor: '#CE1126' }}></div>
      </div>
    </header>
      );
}

export default Header;
