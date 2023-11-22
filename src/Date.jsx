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
        String(date.getHours()).padStart(2, "0"),
        String(date.getMinutes()).padStart(2, "0")
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
              {setdata && <p> {'22/11/2023 -'}  {sethora} </p>}
          </div>
      </>
    );
  }
export default DateTime;