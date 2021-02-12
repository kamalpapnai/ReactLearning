import React,{useState}from 'react';

function DigitalClockUsingHooks()
{
  let time = (new Date()).toLocaleTimeString();
  const [curTime, setTime] = useState(time);
  
  setInterval(()=>{
    setTime((new Date()).toLocaleTimeString());
  },1000);

    return (
        <>
        <div className="div-center">
                <h1 className="h_center">{curTime}</h1>
            </div>
        </>
    )
}


export default DigitalClockUsingHooks