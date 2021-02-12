import React, {useState} from 'react';

function EventHandling()
{
    let initialColor = {
        height:'100vh',
        backgroundColor:'green',
    }
    let newColor = {
        height:'100vh',
        backgroundColor:'red'
    }
    
    let [curValue,updateColour] = useState(initialColor);

    const bgChange = ()=>{
       if(curValue.backgroundColor == initialColor.backgroundColor)
       {
           updateColour(newColor);
       }
       else if(curValue.backgroundColor === newColor.backgroundColor){
           updateColour(initialColor);
       }

    }

    return (
        <>
        <div style={curValue} className="div-center">
                <button className="btn" onClick={bgChange}>Change Colour</button>
        </div>
        </>
    )
}

export default EventHandling