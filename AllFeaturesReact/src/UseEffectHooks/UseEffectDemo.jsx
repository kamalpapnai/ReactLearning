import React, { useState,useEffect } from 'react';

function UseEffectDemo()
{
    const [num,increment] = useState(0);
    const [nums,increments] = useState(0);
    
    useEffect(()=>{
     document.title =`You clicked me ${num} time`;
    },[num])


    const incrementCount = ()=>{
        increment(num+1);
    }

    const incrementCount1 = ()=>{
        increments(nums+1);
    }

     return (
      <>
      <button onClick={incrementCount}>Click Me {num}</button>
      <br/>
      <button onClick={incrementCount1}>Click Me {nums}</button>
      </>
  )
}

export default UseEffectDemo