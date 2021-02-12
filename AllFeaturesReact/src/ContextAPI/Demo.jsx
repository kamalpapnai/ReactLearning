import React, { createContext } from 'react';
import Component1 from './Component1';

const FirstName = createContext();
const LastName = createContext();

function Demo()
{

  return (
      <>
      <FirstName.Provider value={"Kamal"}>
          <LastName.Provider value={"Sharma"}>
          <Component1/>
          </LastName.Provider>
      </FirstName.Provider>
      </>
  )
}

export default Demo
export {FirstName,LastName};