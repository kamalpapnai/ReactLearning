import React, { useContext } from 'react'
import {FirstName,LastName} from './Demo';

function UseContext()
{
  const firstName = useContext(FirstName);
  const lastName = useContext(LastName);

  return (
      <>
      <h1>Data from parent component using useContext:{firstName} {lastName}</h1>
      </>
  )
}

export default UseContext