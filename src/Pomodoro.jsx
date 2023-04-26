import React, {useState, useEffect} from 'react';

export default function Pomodoro() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [displayMessage, setDisplayMessage] = useState(false);

      /*Acima eu importo o hook useState que ajuda a gerenciar o estado. No componente Pomodoro o useState é acionado 3 vezes, o primeiro estado é o 'minutes', iniciado com o valor de 25. O segundo é o 'seconds', que é iniciado com o valor 0. O terceiro é 'displayMessage, que é iniciado com o valor false. Os Set's são funções para atualizar os valores desses estados.' */

  useEffect (() => {
    let interval = setInterval(() => {
      clearInterval(interval);

      if (seconds === 0) {
        if (minutes !== 0) {
            setSeconds(59);
            setMinutes(minutes - 1);
        } else {
          let minutes = displayMessage ? 24 : 4;
          let seconds = 59;

          setSeconds(seconds);
          setMinutes(minutes);
          setDisplayMessage(!displayMessage);
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000)
  }, [seconds]);

  /*Preciso estudar um pouco mais para entender sobre o useEffect, não consigo ainda dar uma explicação satisfatória sobre o uso dele. */

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  /*Uso a operação ternária para saber se o valor de 'minutes' é menor que 10. Se for verdade, adiciona um zero à esquerda do valor de 'minutes', se for mentira, atribui o valor de 'minutes a constante 'timerMinutes'. Isso garante que sempre tenha um zero à esquerda dos minutos, caso fique abaixo de 10.*/
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;
  /*Essa constante funciona da mesma maneira que a outra acima, com o mesmo objetivo.*/
  return (
    <div className='pomodoro'>
      <div className='message'>
        {displayMessage &&<div>O tempo acabou! Nova sessão começa em:</div>}
      </div>
      <div className='timer'>
        {timerMinutes}:{timerSeconds}
      </div>
    </div>
  )
}