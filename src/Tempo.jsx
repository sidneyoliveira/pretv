import React, { Fragment, useEffect, useState } from 'react';
import './tempo.css';
import { FaLocationDot } from "react-icons/fa6";
import { RiWindyFill } from "react-icons/ri";
import { WiHumidity } from "react-icons/wi";

import { IconContext } from "react-icons";
import DateTime from './Date';

function Temperatura() {
  const [count, setCount] = useState();
  const [temp, setTemp] = useState([]);

  useEffect(() => {
    
    const interval =  setInterval( async () => {
                
        const res = await fetch("https://api.openweathermap.org/data/2.5/weather?q=itarema&units=metric&appid=447954334ef4e0c591d2ef05536ccc95&lang=pt_br");
        const data = await res.json();
        setTemp(data);
        
    }, 1000);

    // Limpar o intervalo quando o componente for desmontado
    return () => clearInterval(interval);
  }, [count]);
 
    return (
      <>
          <div className='containerTemp'>
            
            <div className='tl'>
              <IconContext.Provider value={{ color: "white"}}><FaLocationDot />
              <spam>Itarema</spam>
              <img src="./images/bandeira.png" alt="Bandeira do Municipio" id="bandeira" />
              </IconContext.Provider>    
            </div>

            <div className='horadata'>
            <DateTime/>
            </div>
      
            <div className="temp-container">
            <div className='temperatura'>
                {temp.main && <spam className='tempNum'> {parseInt(temp.main.temp)+"º"}</spam>}
            </div>

            <div className="desc">
                {temp.weather && <spam> {temp.weather[0].description[0].toUpperCase() + temp.weather[0].description.substring(1)} </spam>}
                {temp.weather && <img src={`https://openweathermap.org/img/wn/${temp.weather[0].icon}.png`}/>}
            </div>
            
            </div> 

            <div className="informacoes">
            
            <div id='vento'>
              <div id='top-u'>
              {temp.main && <spam className='text'>{temp.wind.speed+' km/h'}</spam>}
              </div>
              <div id='botton-u'>
                <IconContext.Provider value={{ color: "white"}}><WiHumidity />
                </IconContext.Provider>
                <span>Vento</span>
              </div>
            </div> 

            <div id='umidade'>
              <div id='top-u'>
              {temp.main && <spam className='text'>{temp.main.humidity+' %'}</spam>}
              </div>
              <div id='botton-u'>
                <IconContext.Provider value={{ color: "white"}}><RiWindyFill />
                </IconContext.Provider>
                <span>Umidade</span>
              </div>
            </div> 
            </div>

          </div>
      </>
    );
  }
export default Temperatura;