import React, { useRef, useEffect, useState } from 'react';
import './slide.css';


function SlideImg() {
  const [count, setCount] = useState(1);
  const [imageUrl, setImageUrl] = useState('');

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
          {imageUrl && <img src={imageUrl} alt={`Image ${count}`} />}
          </div>
      </>
    );
  }
export default SlideImg;