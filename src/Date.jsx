import React, { useRef, useEffect, useState } from 'react';
import './date.css';


function DateTime() {
  const [count, setCount] = useState(1);
  const [setdata, setDate] = useState('');
  const [sethora, setHora] = useState('');

    useEffect(() => {

      const interval = setInterval(() => {

        function formatarData(date) {
          const diasSemana = ['Dom', 'Seg', 'Terç', 'Qua', 'Qui', 'Sexta', 'Sáb'];
          const mesesAno = [
            'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
            'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
          ];
        
          const diaSemana = diasSemana[date.getDay()];
          const dia = date.getDate();
          const mes = mesesAno[date.getMonth()];
        
          return `${diaSemana.slice(0, 6)}. ${dia} ${mes}`;
        }
        
        const date = new Date();
        const dataFormatada = formatarData(date);

      const [hour, minutes] = [
        String(date.getHours()).padStart(2, "0"),
        String(date.getMinutes()).padStart(2, "0")
      ];

      const hora = `${hour}:${minutes}`;

      setDate(dataFormatada);
      setHora(hora);

      }, 1000);
      
    }, [count]);
  
 
    return (
      <>
          <div className="date">
              {sethora && <p id='hora'> {sethora} <br /></p>}
              {setdata && <p id='data'> {setdata}</p>}
          </div>
      </>
    );
  }
export default DateTime;