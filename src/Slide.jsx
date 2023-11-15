import React, { useRef, useEffect, useState } from 'react';
import './slide.css';



function SlideImg() {
  const [count, setCount] = useState(1);

   setTimeout(() => {
    setCount(count+1);
      
  }, "8000");

  let Url = "./img/("+count+").jpg"
  
    return (
      <>
          <div className="ImageSlide">
            <img src={Url} alt="" />
          </div>
      </>
    );
  }
export default SlideImg;