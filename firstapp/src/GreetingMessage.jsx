import React from 'react';

function GreetingMessage()
{
    let greetingMessage = "Good ";
    const greetingMsg = {
        border: '2px solid red',
        padding: '20px 20px',
        letterSpacing: '2px',
        color: 'yellow',
    }
    let currentTime = (new Date()).toLocaleTimeString();
    let time = currentTime.split(':');
    if (time[0] < 12) {
        greetingMessage += 'Morning!';
        greetingMsg['color'] = 'orange'
    }
    else if (time[0] > 12 && time[0] < 19) {
        greetingMessage += 'Afternoon!'
        greetingMsg['color'] = 'cherry'
    }
    else {
        greetingMessage += 'Night!';
        greetingMsg['color'] = 'yellow'
    }
    
    return (
        <>
         <h3 style={greetingMsg}>{`Hello! ${greetingMessage}`}</h3>
        </>
    )
}

export default GreetingMessage