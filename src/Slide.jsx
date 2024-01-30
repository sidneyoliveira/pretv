import React, { useRef, useEffect, useState } from 'react';
import './slide.css';


function SlideImg() {
  const [count, setCount] = useState(2);
  const [imageUrl, setImageUrl] = useState("./img/(1).jpg");

  useEffect(() => {
    
    const interval = setInterval(() => {
      const url = `./img/(${count}).jpg`;
      const img = new Image();
      img.src = url;

      img.onload = () => {
        setImageUrl(url);
        setCount(prevCount => prevCount + 1);
      };

      img.onerror = () => {
        // Se a imagem não for encontrada, podemos parar o intervalo ou tomar outra ação
        clearInterval(interval);
        setCount(prevCount => prevCount = 1);
        console.log('Erro ao carregar a imagem!');
      };
    }, 8000);

    // Limpar o intervalo quando o componente for desmontado
    return () => clearInterval(interval);
  }, [count]);
 
    return (
      <>
          <div className="ImageSlide">
          <iframe id="ytplayer" type="text/html" width="720" height="405" src="https://www.youtube.com/embed/3PLbgGRc_64?autoplay=0&controls=0&fs=0&color=white&iv_load_policy=3" frameborder="0" allowfullscreen></iframe>
          </div>
      </>
    );
  }
export default SlideImg;