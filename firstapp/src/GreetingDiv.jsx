import React from 'react';
import GreetingMessage from './GreetingMessage';

function GreetingDiv()
{
    const divGreeting = {
        textAlign: 'center',
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translateX(-80%)',
        fontFamily: `'Josefin Sans', sans-serif'`,
        border: 'solid 2px brown',
        backgroundColor: 'rosybrown',
        padding: '50px 100px'
    }
    return (
        <>
         <div style={divGreeting}>
           <GreetingMessage/>
         </div>
        </>
    )
}

export default GreetingDiv