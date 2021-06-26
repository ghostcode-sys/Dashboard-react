import React, {useState,useEffect} from 'react'

function Later() {
    const [time, settime] = useState("");
    useEffect(()=>{
        var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  settime( days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ");

  if (distance < 0) {
    clearInterval(x);
    settime( "EXPIRED");
}}, 1000);
    },[time]);
    return (
        <div className='later'>
            <h1>coming soon .....</h1>
            <h1>{time}</h1>
        </div>
    )
}

export default Later
