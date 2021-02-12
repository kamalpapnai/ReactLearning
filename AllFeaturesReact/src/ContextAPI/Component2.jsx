import React from 'react';
import Component3 from './Component3';
import UseContext from './UseContext';

function Component2()
{
  return (
      <>
      {/**Using context API */}
      <Component3/>

      {/**Using useContext */}
      <UseContext/>
      </>
  )
}

export default Component2