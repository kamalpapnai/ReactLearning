import React, { useState } from 'react';


function TimeUsingHooks()
{
    let [curTime,changeTime] = useState((new Date()).toLocaleTimeString());
    function UpdateTime()
    {
        changeTime((new Date()).toLocaleTimeString());
    }
    return (
        <>
          <div className="div-center">
                <h1 className="h_center">{curTime}</h1>
                <button className="btn" onClick={UpdateTime}>Get Time</button>
            </div>
        </>
    )
}

export default TimeUsingHooks