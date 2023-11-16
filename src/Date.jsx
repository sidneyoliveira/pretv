import React, { useRef, useEffect, useState } from 'react';
import './date.css';


function DateTime() {
  const [count, setCount] = useState(1);
  const [setdata, setDate] = useState('');
  const [sethora, setHora] = useState('');

    useEffect(() => {

      const interval = setInterval(() => {
      const date = new Date();

      const [month, day, year] = [
        date.getMonth(),
        date.getDate(),
        date.getFullYear(),
      ];

      const [hour, minutes] = [
        date.getHours(),
        date.getMinutes(),
      ];

      const data = `${day}/${month}/${year}`;
      const hora = `${hour}:${minutes}`;

      setDate(data);
      setHora(hora);

      }, 1000);
      
    }, [count]);
  
 
    return (
      <>
          <div className="date">
              {setdata && <p> {setdata}  {sethora} </p>}
          </div>
      </>
    );
  }
export default DateTime;