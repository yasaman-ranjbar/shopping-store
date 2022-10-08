import  { useState } from 'react';

export default function useCountDown(time) {

    const [timer , setTimer] = useState()

    // Set the date we're counting down to
    const countDownDate = new Date(time).getTime();

    // Update the count down every 1 second
    const myTimer = setInterval(function () {

        // Get today's date and time
        const now = new Date().getTime();

        // Find the distance between now and the count down date
        const distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // If the count down is finished, write some text

        const checkHours = hours < 10 ? '0' + hours : hours;
        const checkMinutes = minutes < 10 ? '0' + minutes : minutes;
        const checkSeconds = seconds < 10 ? '0' + seconds : seconds;
       

        setTimer(checkHours + " : " + checkMinutes + " : " + checkSeconds)


        if(distance < 0)
            clearInterval(myTimer)
        
    }, 1000);

  return timer
}