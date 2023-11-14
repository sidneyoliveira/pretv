import React, { useRef, useEffect, useState } from 'react';
import SlideImg from './Slide';


import './app.css';

export default function App() {
  return (
    <>
    <div className='container'>
      
      <div className="col1">
        <div className="images logo">
          <img src="./images/logo.png" alt="logo" />
        </div>
        <div className="images redes">
          <img src="./images/redes.png" alt="redes" />
        </div>
        <div className="footer-img">
            <img src="./images/foto.png" alt="redes" />
        </div>
      </div>

      <div className="col2">
        <SlideImg/>
      </div>
    </div>
    </>
  );
}
