import React, { Fragment, useEffect, useState } from 'react';
import './tempo.css';


function Temperatura() {
  const [count, setCount] = useState();
  const [temp, setTemp] = useState([]);

  useEffect(() => {
    
    const interval =  setInterval( async () => {
                
        const res = await fetch("https://api.openweathermap.org/data/2.5/weather?q=itarema&units=metric&appid=447954334ef4e0c591d2ef05536ccc95&lang=pt_br");
        const data = await res.json();
        setTemp(data);
        console.log(data);
        
    }, 1000);

    // Limpar o intervalo quando o componente for desmontado
    return () => clearInterval(interval);
  }, [count]);
 
    return (
      <>
          <div className='containerTemp'>
            <div className='tl'>
                <p>Itarema-CE</p>
            </div>
            <div className="desc">
                {temp.weather && <spam> {temp.weather[0].description[0].toUpperCase() + temp.weather[0].description.substring(1)} </spam>}
                {temp.weather && <img src={`https://openweathermap.org/img/wn/${temp.weather[0].icon}.png`}/>}
            </div>
            <div className='temperatura'>
                {temp.main && <p className='tempNum'> {parseInt(temp.main.temp)} ºC </p>}
            </div>
            <div className="info">
                {}
            </div>
            
          </div>
      </>
    );
  }
export default Temperatura;