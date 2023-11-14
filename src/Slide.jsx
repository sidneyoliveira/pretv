import React, { useRef, useEffect, useState } from 'react';
import './slide.css';

const [Url, SetUrl] = useState([])

export default function SlideImg() {
    return (
      <>
          <div className="image">
            <img src={Url} alt="" />
          </div>
      </>
    );
  }
  