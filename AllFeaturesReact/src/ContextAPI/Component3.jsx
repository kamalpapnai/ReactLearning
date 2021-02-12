import React from 'react'
import {FirstName,LastName} from './Demo';

function Component3()
{
  return (
      <>
      <FirstName.Consumer>
          {(fname)=>{
          return (
              <LastName.Consumer>
                  {
                      (lastName)=>{
                        return <h1>This is component 3 and data from Component 1 is {fname} {lastName}</h1>
                      }
                  }
              </LastName.Consumer>
          ) ;
      }}
      </FirstName.Consumer>
      </>
  )
}

export default Component3